import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function Info() {
    const { container } = styles;

    return (
        <div>
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item) => {
                        return (
                            <InfoCard
                                content={item.title}
                                description={item.description}
                                src={item.src}
                            />
                        );
                    })}
                </div>
            </MainLayout>
        </div>
    );
}

export default Info;
