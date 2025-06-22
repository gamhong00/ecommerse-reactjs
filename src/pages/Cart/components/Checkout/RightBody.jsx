import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@contexts/SideBarProvider';
import Button from '@components/Button/Button';
import PaymentMethods from '@components/PaymentMethods/PaymentsMethods';
import { handleTotalPrice } from '@/utils/helper';
import { MdCardGiftcard } from 'react-icons/md';
function RightBody({ handleExternalSubmit }) {
    const { rightBody, title, items, item, subTotal, total, payment, btn } =
        styles;

    const { listProductCart } = useContext(SideBarContext);
    // console.log(listProductCart);

    return (
        <div className={rightBody}>
            <p className={title}>YOUR ORDER</p>

            <div className={items}>
                {listProductCart.map((product) => (
                    <div className={item}>
                        <img src={product.images[0]} alt='' />
                        <div>
                            <p>{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Size: {product.size}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={subTotal}>
                <p>Subtotal</p>
                <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
            </div>

            <div className={total}>
                <p>Subtotal</p>
                <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
            </div>

            <div className={payment}>
                <input type='radio' id='qr' name='fav_language' value='qr' />
                <label for='qr'>QR CODE</label>
            </div>

            <div>
                <input type='radio' id='cod' name='fav_language' value='cod' />
                <label for='cod'>Cash on delivery</label>
            </div>

            <div className={btn}>
                <Button content='PLACE ORDER' onClick={handleExternalSubmit} />
            </div>

            <PaymentMethods />
        </div>
    );
}

export default RightBody;
