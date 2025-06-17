import Contents from '@pages/Cart/components/contents/Contents';
import { StepperContext } from '@contexts/StepperProvider';
import { useContext } from 'react';

function ContentStep() {
    const { currentStep } = useContext(StepperContext);

    console.log(currentStep);

    const handleRenderContent = () => {
        switch (currentStep) {
            case 1:
                return <Contents />;
            case 2:
                return <div>Step 2 Content</div>;
            case 3:
                return <div>Step 3 Content</div>;
        }
    };

    return <>{handleRenderContent()}</>;
}

export default ContentStep;
