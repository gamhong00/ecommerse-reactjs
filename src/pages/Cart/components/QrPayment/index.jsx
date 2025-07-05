import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import cls from 'classnames';
import { getDetailOrder } from '@/apis/orderService';
import { useEffect, useState } from 'react';
import { set } from 'react-hook-form';

function QrPayment() {
    const { container, left, right, flex, title, des, total } = styles;

    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const [isSuccess, setIsSuccess] = useState(false);

    const id = param.get('id');
    const totalAmount = param.get('totalAmount');

    const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQADALH7226&bank=MBBank&amount=${totalAmount}&des=${id}`;

    let interval;
    const handleGetDetailOrder = async () => {
        if (!id) return;

        try {
            const res = await getDetailOrder(id);
            if (res.data.data.status !== 'pending') clearInterval(interval);
            if (res.data.data.status === 'success') setIsSuccess(true);
            else setIsSuccess(false);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        interval = setInterval(() => {
            handleGetDetailOrder();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={container}>
            <div className={left}>
                <h4>Quét mã QR để thanh toán</h4>
                <img src={qrCodeImage} alt='' />
                <p>Sử dụng ứng dụng ngân hàng của bạn để quét mã QR này</p>
            </div>

            <div>
                <h3>Chi tiết thanh toán</h3>
                <div className={right}>
                    <div className={cls(title, flex)}>
                        <img
                            src='https://icolor.vn/wp-content/uploads/2024/08/mbbank-logo-5.png'
                            alt=''
                        />
                        <div>
                            <p>MB BANK</p>
                            <p>Chuyển khoản ngân hàng</p>
                        </div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Chủ tài khoản</div>
                        <div>NGUYEN THI HONG GAM</div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Số tài khoản</div>
                        <div>0369204207</div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Số tiền</div>
                        <div>{totalAmount} VND</div>
                    </div>

                    <div className={cls(flex, des)}>
                        <div>Nội dung chuyển khoản</div>
                        <div>{id}</div>
                    </div>

                    <div className={cls(flex, total)}>
                        <div>TOTAL</div>
                        <div>{totalAmount} VND</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QrPayment;
