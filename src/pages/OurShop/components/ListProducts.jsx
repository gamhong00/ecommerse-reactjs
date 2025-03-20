import MainLayout from '@/components/Layout/Layout';
import ProductItem from '@/components/ProductItem/ProductItem';
import { OurShopContext } from '@contexts/OurShopProvider';
import { useContext } from 'react';
import styles from '../styles.module.scss';
import Button from '@/components/Button/Button';
import LoadingTextCommon from '@/components/LoadingTextCommon/LoadingTextCommon';

function ListProducts() {
    const { containerProduct, sectionListProduct, rotate } = styles;

    const {
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore
    } = useContext(OurShopContext);

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                {isLoading ? (
                    <>loading...</>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHomepage={false}
                                />
                            ))}
                        </div>
                        {products.length < total && (
                            <div
                                style={{ width: '180px', margin: '50px auto' }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextCommon />
                                        ) : (
                                            'LOAD MORE PRODUCT'
                                        )
                                    }
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
