import { useContext } from 'react';
import styles from '../../styles.module.scss';
import classNames from 'classnames';
import { StepperContext } from '@contexts/StepperProvider';

function Stepper({ nummber, content, isDisable }) {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;

    const { setCurrentStep } = useContext(StepperContext);

    return (
        <div className={stepper} onClick={() => setCurrentStep(nummber)}>
            <div
                className={classNames(numberStep, {
                    [isDisableNumber]: isDisable
                })}
            >
                {nummber}
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
