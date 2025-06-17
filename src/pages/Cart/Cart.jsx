import MyFooter from '@/components/Footer/Footer';
import MyHeader from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import ContentStep from '@pages/Cart/components/ContentStep';
import Steps from '@pages/Cart/components/steps/Steps';
import styles from './styles.module.scss';
import { StepperProvider } from '@contexts/StepperProvider';

function Cart() {
    const { container } = styles;

    return (
        <StepperProvider>
            <MyHeader />
            <div className={container}>
                <Steps />
                <MainLayout>
                    <ContentStep />
                </MainLayout>
            </div>
            <MyFooter />
        </StepperProvider>
    );
}

export default Cart;
