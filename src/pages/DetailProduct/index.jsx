import MyHeader from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@/components/PaymentMethods/PaymentsMethods';
import AccordionMenu from '@/components/AccordionMenu';
import { useEffect, useState } from 'react';
import InformationProduct from '@pages/DetailProduct/components/Information';
import ReviewProduct from '@pages/DetailProduct/components/Review';
import MyFooter from '@/components/Footer/Footer';
import SliderCommon from '@/components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import { data, useParams } from 'react-router-dom';
import { Value } from 'sass';
import classNames from 'classnames';
import { getDetailProduct } from '@/apis/productsService';

const tempDataSize = [
    {
        name: 'M',
        amount: '1000'
    },
    {
        name: 'L',
        amount: '1000'
    }
];

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

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
        info,
        active,
        clear,
        activeDisableBtn
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const param = useParams();
    console.log(param);

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'Additional information',
            content: <InformationProduct />
        },
        { id: 2, titleMenu: 'Reviews (0)', content: <ReviewProduct /> }
    ];

    const dataImageDetail = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg'
    ];

    const handleRenderZoomImage = (src) => {
        return (
            <ReactImageMagnifier
                srcPreview={src}
                srcOriginal={src}
                width={295}
                height={350}
            />
        );
    };
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

    const handleSelectedSize = (size) => {
        setSizeSelected(size);
    };

    const handleClearSizeSelected = () => {
        setSizeSelected('');
    };

    const handleSetQuantity = (type) => {
        if (quantity === 1 && type === DECREMENT) return;
        setQuantity((prev) => (type === INCREMENT ? (prev += 1) : (prev -= 1)));
    };

    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
            const data = await getDetailProduct(id);

            setData(data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
        }
    }, [param]);

    console.log(data);

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
                            {dataImageDetail.map((item, index) =>
                                handleRenderZoomImage(item)
                            )}
                        </div>
                        <div className={infoBox}>
                            <h1>Title Product</h1>
                            <p className={price}>$1,879.99</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>

                            <p className={titleSize}>Size {sizeSelected}</p>
                            <div className={boxSize}>
                                {tempDataSize.map((itemSize, index) => {
                                    return (
                                        <div
                                            className={classNames(size, {
                                                [active]:
                                                    sizeSelected ===
                                                    itemSize.name
                                            })}
                                            key={index}
                                            onClick={() =>
                                                handleSelectedSize(
                                                    itemSize.name
                                                )
                                            }
                                        >
                                            {itemSize.name}
                                        </div>
                                    );
                                })}
                            </div>

                            {sizeSelected && (
                                <p
                                    className={clear}
                                    onClick={handleClearSizeSelected}
                                >
                                    clear
                                </p>
                            )}

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div
                                        onClick={() =>
                                            handleSetQuantity(DECREMENT)
                                        }
                                    >
                                        -
                                    </div>
                                    <div>{quantity}</div>
                                    <div
                                        onClick={() =>
                                            handleSetQuantity(INCREMENT)
                                        }
                                    >
                                        +
                                    </div>
                                </div>

                                <div className={boxBtn}>
                                    <Button
                                        content={'ADD TO CART'}
                                        customClassname={
                                            !sizeSelected && activeDisableBtn
                                        }
                                    />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div></div>
                                <span>OR</span>
                                <div></div>
                            </div>

                            <div>
                                <Button
                                    content={'BUY NOW'}
                                    customClassname={
                                        !sizeSelected && activeDisableBtn
                                    }
                                />
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
