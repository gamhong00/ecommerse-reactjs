import { getDetailOrder } from '@/apis/orderService';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Orders() {
    const location = useLocation();
    const param = new URLSearchParams(location.search);

    const id = param.get('id');
    const totalAmount = param.get('totalAmount');

    const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQADALH7226&bank=MBBank&amount=${totalAmount}&des=${id}`;

    const handleGetDetailOrder = async () => {
        try {
            const res = await getDetailOrder(id);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetDetailOrder();
    }, []);

    return (
        <div>
            <img src={qrCodeImage} alt='' />
        </div>
    );
}

export default Orders;
