import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({
    content,
    isPrimary = true,
    customClassname = false,
    ...props
}) {
    const { btn, primaryBtn, secondaryBtn } = styles;

    return (
        <button
            className={classNames(btn, {
                [primaryBtn]: isPrimary,
                [secondaryBtn]: !isPrimary,
                [customClassname]: customClassname
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default Button;
