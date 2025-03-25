import { SideBarContext } from '@contexts/SideBarProvider';
import { useContext } from 'react';
import styles from './styles.module.scss';
import SliderCommon from '@/components/SliderCommon/SliderCommon';
import SelectBox from '@pages/OurShop/components/SelectBox';
import Button from '@/components/Button/Button';
import { PiShoppingCartLight } from 'react-icons/pi';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { RiTwitterXFill } from 'react-icons/ri';
import { BiLogoFacebook } from 'react-icons/bi';

function DetailProduct() {
    const {
        container,
        title,
        price,
        des,
        boxSize,
        size,
        label,
        boxAddToCart,
        boxOr,
        line,
        or,
        boxAddOther,
        boxFooter
    } = styles;
    const { detailProduct } = useContext(SideBarContext);

    const showOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' }
    ];

    console.log(detailProduct);

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />

            <div className={title}>{detailProduct.name}</div>
            <div className={price}>${detailProduct.price}</div>
            <div className={des}>{detailProduct.description}</div>

            <div className={label}>Size</div>
            <div className={boxSize}>
                {detailProduct.size.map((item, index) => (
                    <div className={size} key={index}>
                        {item.name}
                    </div>
                ))}
            </div>

            <div className={boxAddToCart}>
                <SelectBox options={showOptions} type='show' />

                <div>
                    <Button
                        content={
                            <div>
                                <PiShoppingCartLight /> ADD TO CART
                            </div>
                        }
                    />
                </div>
            </div>

            <div className={boxOr}>
                <div className={line} />
                <div className={or}>OR</div>
                <div className={line} />
            </div>

            <Button
                content={
                    <div>
                        <PiShoppingCartLight /> SELECT OPTIONS
                    </div>
                }
            />

            <div className={boxAddOther}>
                <TfiReload style={{ fontSize: '23px' }} />
                <div>Add to compare</div>
            </div>

            <div className={boxAddOther}>
                <CiHeart style={{ fontSize: '25px' }} />
                <div>Browse wishlist</div>
            </div>

            <div className={boxFooter}>
                SKU: <span>12345</span>
            </div>
            <div className={boxFooter}>
                Category: <span>Pullovers</span>
            </div>
            <div className={boxFooter}>
                Estimated delivery:
                <span>3 - 7 days</span>
            </div>
            <div className={boxFooter}>
                Share:
                <span>
                    <a href='https://x.com/share?url=https://xstore.8theme.com/elementor2/marseille04/product/consectetur-nibh-at/&text=Consectetur%20nibh%20at'>
                        <RiTwitterXFill />
                    </a>
                    <a href='https://www.facebook.com/'>
                        <BiLogoFacebook />
                    </a>
                </span>
            </div>
        </div>
    );
}

export default DetailProduct;
