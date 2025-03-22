import styles from '../../styles.module.scss';
import classNames from 'classnames';

function Stepper({ nummber, content, isDisable }) {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } =
        styles;

    return (
        <div className={stepper}>
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
