import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProducts({ data }) {
    const { container, containerItem } = styles;
    // console.log(data);
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            details={item}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProducts;
