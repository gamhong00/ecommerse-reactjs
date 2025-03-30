import MyHeader from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@/components/PaymentMethods/PaymentsMethods';
import AccordionMenu from '@/components/AccordionMenu';
import { useState } from 'react';
import InformationProduct from '@pages/DetailProduct/components/Information';
import ReviewProduct from '@pages/DetailProduct/components/Review';
import MyFooter from '@/components/Footer/Footer';
import SliderCommon from '@/components/SliderCommon/SliderCommon';

function DetailProduct() {
    const {
        container,
        navigateSection,
        contentSection,
        imageBox,
        infoBox,
        price,
        description,
        titleSize,
        boxSize,
        size,
        functionInfo,
        boxBtn,
        incrementAmount,
        orSection,
        addFunc,
        info
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'Additional information',
            content: <InformationProduct />
        },
        { id: 2, titleMenu: 'Reviews (0)', content: <ReviewProduct /> }
    ];

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

    const tempDataSlider = [
        {
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg',
            name: 'test product',
            price: '1,879.99',
            size: [{ name: 'L' }, { name: 'M' }]
        },
        {
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg',
            name: 'test product',
            price: '1,879.99',
            size: [{ name: 'L' }, { name: 'M' }]
        },
        {
            image: 'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg',
            name: 'test product',
            price: '1,879.99',
            size: [{ name: 'L' }, { name: 'M' }]
        }
    ];

    return (
        <div>
            <MyHeader />
            <div className={container}>
                <MainLayout>
                    <div className={navigateSection}>
                        <div>Home {'>'} Men</div>
                        <div className='' style={{ cursor: 'pointer' }}>
                            {'<'}Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imageBox}>
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg'
                                alt='pd'
                            />

                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg'
                                alt='pd'
                            />
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg'
                                alt='pd'
                            />
                            <img
                                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg'
                                alt='pd'
                            />
                        </div>
                        <div className={infoBox}>
                            <h1>Title Product</h1>
                            <p className={price}>$1,879.99</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>

                            <p className={titleSize}>Size</p>
                            <div className={boxSize}>
                                <div className={size}>S</div>
                                <div className={size}>M</div>
                                <div className={size}>L</div>
                            </div>

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>

                                <div className={boxBtn}>
                                    <Button content={'ADD TO CART'} />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div></div>
                                <span>OR</span>
                                <div></div>
                            </div>

                            <div>
                                <Button content={'BUY NOW'} />
                            </div>

                            <div className={addFunc}>
                                <div>
                                    <CiHeart />
                                </div>
                                <div>
                                    <TfiReload />
                                </div>
                            </div>

                            <div>
                                <PaymentMethods />
                            </div>

                            <div className={info}>
                                <div>
                                    Brand: <span>Brand 04</span>
                                </div>

                                <div>
                                    SKU: <span>2345</span>
                                </div>

                                <div>
                                    Category: <span>All</span>
                                </div>
                            </div>

                            {dataAccordionMenu.map((item, index) => {
                                return (
                                    <AccordionMenu
                                        key={index}
                                        titleMenu={item.titleMenu}
                                        contentJsx={item.content}
                                        onClick={() =>
                                            handleSetMenuSelected(item.id)
                                        }
                                        isSelected={menuSelected === item.id}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div>Related products</div>

                        <SliderCommon
                            data={tempDataSlider}
                            isProductItem
                            showItem={4}
                        />
                    </div>
                </MainLayout>
            </div>

            <MyFooter />
        </div>
    );
}

export default DetailProduct;
