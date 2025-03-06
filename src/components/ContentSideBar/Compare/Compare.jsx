import HeaderSidebar from '@components/ContentSideBar/components/HeaderSidebar/HeaderSidebar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentSideBar/components/ItemProduct/ItemProduct';

function Compare() {
    const { container } = styles;
    return (
        <div className={container}>
            <HeaderSidebar
                icon={<TfiReload style={{ fontSize: '30px' }} />}
                title='COMPARE'
            />
            <ItemProduct />
        </div>
    );
}

export default Compare;
