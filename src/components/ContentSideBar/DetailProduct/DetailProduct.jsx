import { SideBarContext } from '@contexts/SideBarProvider';
import { useContext } from 'react';
import styles from './styles.module.scss';
import SliderCommon from '@/components/SliderCommon/SliderCommon';

function DetailProduct() {
    const { container } = styles;
    const { detailProduct } = useContext(SideBarContext);

    console.log(detailProduct);

    return (
        <div className={container}>
            <SliderCommon data={detailProduct.images} />
        </div>
    );
}

export default DetailProduct;
