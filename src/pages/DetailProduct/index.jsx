import MyHeader from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import styles from './styles.module.scss';
import Button from '@/components/Button/Button';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import PaymentMethods from '@/components/PaymentMethods/PaymentsMethods';
import AccordionMenu from '@/components/AccordionMenu';
import { useContext, useEffect, useState } from 'react';
import InformationProduct from '@pages/DetailProduct/components/Information';
import ReviewProduct from '@pages/DetailProduct/components/Review';
import MyFooter from '@/components/Footer/Footer';
import SliderCommon from '@/components/SliderCommon/SliderCommon';
import ReactImageMagnifier from 'simple-image-magnifier/react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { getDetailProduct, getRelatedProducts } from '@/apis/productsService';
import LoadingTextCommon from '@/components/LoadingTextCommon/LoadingTextCommon';
import { handleAddProductToCartCommon } from '@/utils/helper';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import Cookies from 'js-cookie';

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
        activeDisableBtn,
        loading,
        emptyData
    } = styles;

    const [menuSelected, setMenuSelected] = useState(1);
    const [sizeSelected, setSizeSelected] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [relatedData, setRelatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const param = useParams();
    const navigate = useNavigate();
    const { setIsOpen, setType, handleGetListProductsCart } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const userId = Cookies.get('userId');
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);

    const dataAccordionMenu = [
        {
            id: 1,
            titleMenu: 'Additional information',
            content: <InformationProduct />
        },
        { id: 2, titleMenu: 'Reviews (0)', content: <ReviewProduct /> }
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
            toast.error('Có lỗi khi tải dữ liệu');
            setData();
            setIsLoading(false);
        }
    };

    const fetchDataRelatedProduct = async (id) => {
        setIsLoading(true);
        try {
            const data = await getRelatedProducts(id);
            setRelatedData(data);
            setIsLoading(false);
        } catch (error) {
            toast.error('Có lỗi khi tải dữ liệu');
            setRelatedData([]);
            setIsLoading(false);
        }
    };

    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Add product to cart
     *
     * This function adds product to cart. It will call handleAddProductToCartCommon
     * function with suitable params. If add product to cart successfully, it will
     * open side bar and set type of side bar is 'cart'
     */
    /*******  5c02cb98-73af-43e5-8918-60551b368c9c  *******/
    const handleAdd = () => {
        handleAddProductToCartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeSelected,
            param.id,
            quantity,
            setIsLoadingBtn,
            handleGetListProductsCart
        );
    };

    useEffect(() => {
        if (param.id) {
            fetchDataDetail(param.id);
            fetchDataRelatedProduct(param.id);
        }
    }, [param]);

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

                    {isLoading ? (
                        <div className={loading}>
                            <LoadingTextCommon />
                        </div>
                    ) : (
                        <>
                            {!data ? (
                                <div className={emptyData}>
                                    <p>No Result</p>
                                    <div>
                                        <Button
                                            content={'Back to Our Shop'}
                                            onClick={() => navigate('/shop')}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className={contentSection}>
                                    <div className={imageBox}>
                                        {data?.images.map((item, index) =>
                                            handleRenderZoomImage(item)
                                        )}
                                    </div>
                                    <div className={infoBox}>
                                        <h1>{data?.name}</h1>
                                        <p className={price}>${data?.price}</p>
                                        <p className={description}>
                                            {data?.description}
                                        </p>

                                        <p className={titleSize}>
                                            Size {sizeSelected}
                                        </p>
                                        <div className={boxSize}>
                                            {data?.size.map(
                                                (itemSize, index) => {
                                                    return (
                                                        <div
                                                            className={classNames(
                                                                size,
                                                                {
                                                                    [active]:
                                                                        sizeSelected ===
                                                                        itemSize.name
                                                                }
                                                            )}
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
                                                }
                                            )}
                                        </div>

                                        {sizeSelected && (
                                            <p
                                                className={clear}
                                                onClick={
                                                    handleClearSizeSelected
                                                }
                                            >
                                                clear
                                            </p>
                                        )}

                                        <div className={functionInfo}>
                                            <div className={incrementAmount}>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            DECREMENT
                                                        )
                                                    }
                                                >
                                                    -
                                                </div>
                                                <div>{quantity}</div>
                                                <div
                                                    onClick={() =>
                                                        handleSetQuantity(
                                                            INCREMENT
                                                        )
                                                    }
                                                >
                                                    +
                                                </div>
                                            </div>

                                            <div className={boxBtn}>
                                                <Button
                                                    content={
                                                        isLoadingBtn ? (
                                                            <LoadingTextCommon />
                                                        ) : (
                                                            'ADD TO CART'
                                                        )
                                                    }
                                                    customClassname={
                                                        !sizeSelected &&
                                                        activeDisableBtn
                                                    }
                                                    onClick={handleAdd}
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
                                                    !sizeSelected &&
                                                    activeDisableBtn
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

                                        {dataAccordionMenu.map(
                                            (item, index) => {
                                                return (
                                                    <AccordionMenu
                                                        key={index}
                                                        titleMenu={
                                                            item.titleMenu
                                                        }
                                                        contentJsx={
                                                            item.content
                                                        }
                                                        onClick={() =>
                                                            handleSetMenuSelected(
                                                                item.id
                                                            )
                                                        }
                                                        isSelected={
                                                            menuSelected ===
                                                            item.id
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {relatedData.length ? (
                        <div>
                            <div>Related products</div>

                            <SliderCommon
                                data={relatedData}
                                isProductItem
                                showItem={4}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </MainLayout>
            </div>

            <MyFooter />
        </div>
    );
}

export default DetailProduct;
