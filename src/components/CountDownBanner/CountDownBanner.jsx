import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function CountDownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = '2025-12-31T00:00:00';

    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountDownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} />
            </div>
        </div>
    );
}

export default CountDownBanner;
