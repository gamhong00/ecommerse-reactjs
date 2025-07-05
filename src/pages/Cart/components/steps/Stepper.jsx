import { useContext } from 'react';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { StepperContext } from '@contexts/StepperProvider';

function Stepper({ number, content, isDisable }) {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;

    const { setCurrentStep, currentStep } = useContext(StepperContext);

    return (
        <div
            className={stepper}
            onClick={() =>
                number !== 3
                    ? setCurrentStep(number)
                    : setCurrentStep(currentStep)
            }
        >
            <div
                className={classNames(numberStep, {
                    [isDisableNumber]: isDisable
                })}
            >
                {number}
            </div>
            <div
                className={classNames(textStep, {
                    [isDisableText]: isDisable
                })}
            >
                {content}
            </div>
        </div>
    );
}

export default Stepper;
