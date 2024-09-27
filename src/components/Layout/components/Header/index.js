import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faUserCircle,
    faUserAlt,
    faCartShopping,
    faFire,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'English',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(0); 
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img 
                    width="230" 
                    height="50" 
                    src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/logo.png?1727259903818" 
                    data-src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/logo.png?1727259903818" 
                    alt="Caraluna" 
                    className="lazyload loaded" 
                    data-was-processed="true"
                />
            </div>
    
            <div className={styles.center}>
                <div className={styles.search}>
                    <input className={styles.input} placeholder="Tìm sản phẩm..." />
                    <FontAwesomeIcon className={styles.iconGlass} icon={faMagnifyingGlass} />
                </div>
    
                <div className={styles.menu}>
                    <ul>
                        <li>
                            SALE
                            <FontAwesomeIcon className={styles.iconFire} icon={faFire} />
                        </li>
                        <li>
                            DÂY CHUYỀN
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                        <li>
                            HOA TAI
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                        <li>
                            LẮC TAY
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                        <li>
                            NHẪN
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                        <li>
                            QUÀ & ĐỒ ĐÔI
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                        <li>
                            SHOP
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                        <li>
                            ABOUT US
                            <FontAwesomeIcon className={styles.iconArrow} icon={faArrowDown} />
                            <div className={styles.submenu}></div>
                        </li>
                    </ul>
                </div>
            </div>
    
            <div className={styles.right}>
                <div className={styles.account}>
                    <div className={styles.circle}>
                        <FontAwesomeIcon className={styles.iconUser} icon={faUserAlt} />
                    </div>
                    <div className={styles.taikhoan}>
                        Tài khoản
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.circle}>
                        <FontAwesomeIcon className={styles.iconCart} icon={faCartShopping} />
                        {cartCount === 0 && (
                            <span className={styles.cartCount}>{cartCount}</span>
                        )}
                    </div>
                    <div className={styles.giohang}>
                        Giỏ hàng
                    </div>
                </div>
            </div>
        </div>
    );
}    

export default Header;
