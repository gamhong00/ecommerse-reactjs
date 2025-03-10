import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true, ...props }) {
    const { btn, primaryBtn, secondaryBtn } = styles;

    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: !isPrimary
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default Button;
