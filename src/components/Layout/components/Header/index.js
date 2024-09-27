import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faUserAlt,
    faCartShopping,
    faFire,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import ArrowDown from '../../../../icon/arrowdown';

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
                            <ArrowDown />
                        </li>
                        <li>HOA TAI</li>
                        <li>LẮC TAY</li>
                        <li>NHẪN</li>
                        <li>QUÀ & ĐỒ ĐÔI</li>
                        <li>SHOP</li>
                        <li>ABOUT US</li>
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
