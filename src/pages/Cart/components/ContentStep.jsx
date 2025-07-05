import Contents from '@pages/Cart/components/contents/Contents';
import { StepperContext } from '@contexts/StepperProvider';
import { useContext } from 'react';
import Checkout from '@pages/Cart/components/Checkout/Checkout';
import QrPayment from '@pages/Cart/components/QrPayment';

function ContentStep() {
    const { currentStep } = useContext(StepperContext);

    // console.log(currentStep);

    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <Contents />;
            case 2:
                return <Checkout />;
            case 3:
                return <QrPayment />;
        }
    };

    return <>{handleRenderContent()}</>;
}

export default ContentStep;
