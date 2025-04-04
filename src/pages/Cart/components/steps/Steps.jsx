import Stepper from '@pages/Cart/components/steps/Stepper';
import styles from '../../styles.module.scss';

function Steps() {
    const { containerSteps, steps, line, textNoti } = styles;

    const dataSteps = [
        {
            number: 1,
            content: 'Shopping cart'
        },
        {
            number: 2,
            content: 'Checkout'
        },
        {
            number: 3,
            content: 'Order status'
        }
    ];

    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <>
                            <Stepper
                                key={index}
                                nummber={item.number}
                                content={item.content}
                                isDisable={index !== 0}
                            />
                            {index !== dataSteps.length - 1 && (
                                <div className={line} />
                            )}
                        </>
                    );
                })}
            </div>

            <div className={textNoti}>
                You are not time! Checkout new to avoid losing your order!
            </div>
        </div>
    );
}

export default Steps;
