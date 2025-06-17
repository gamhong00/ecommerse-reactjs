import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/image/Logo-retina.png';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { PiShoppingCart } from 'react-icons/pi';

import useScrollHandling from '@/hooks/useScrollHandling';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { use } from 'react';
import { StoreContext } from '@/contexts/StoreProvider';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantity
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const {
        setIsOpen,
        setType,
        listProductCart,
        useId,
        handleGetListProductsCart
    } = useContext(SideBarContext);

    const { userInfo } = useContext(StoreContext);
    // console.log(userInfo);
    const handleOpenSidebar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    const handleOpenCartSideBar = () => {
        handleGetListProductsCart(useId, 'cart');
        handleOpenSidebar('cart');
    };

    const totalItemCart = listProductCart.length
        ? listProductCart.reduce((acc, item) => {
              return (acc += item.quantity);
          }, 0)
        : 0;

    useEffect(() => {
        setFixedPosition(scrollPosition > 80);
    });

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSidebar('compare')}
                        />
                        <FaRegHeart
                            style={{ fontSize: '20px' }}
                            onClick={() => handleOpenSidebar('wishlist')}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{ fontSize: '25px' }}
                                onClick={() => handleOpenCartSideBar()}
                            />

                            <div className={quantity}>
                                {totalItemCart || userInfo?.amountCart || 0}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
