import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiSubtractLine } from 'react-icons/ri';

function AccordionMenu({ titleMenu, contentJsx, onClick, isSelected }) {
    const {
        container,
        title,
        activeTitle,
        contentMenu,
        isVisibility,
        borderBottom
    } = styles;

    const handleToggle = () => {
        onClick();
    };

    return (
        <div className={container}>
            <div
                className={classNames(title, {
                    [activeTitle]: isSelected
                })}
                onClick={handleToggle}
            >
                {isSelected ? (
                    <RiSubtractLine style={{ fontSize: '20px' }} />
                ) : (
                    <MdKeyboardArrowDown style={{ fontSize: '20px' }} />
                )}
                {titleMenu}
            </div>

            <div
                className={classNames(contentMenu, borderBottom, {
                    [isVisibility]: isSelected
                })}
            >
                {contentJsx}
            </div>
        </div>
    );
}

export default AccordionMenu;
