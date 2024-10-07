import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
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

function Header() {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(0); 
    }, []);

    return (
        <div className={styles.wrapper}>
            <footer className="bg-teal-500 text-white p-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">GIỚI THIỆU</h2>
                        <h3 className="text-3xl font-light">CARALUNA</h3>
                        <p className="text-sm">jewelry & gifts</p>
                        <h4 className="font-bold">Địa chỉ:</h4>
                        <ul className="space-y-2 text-sm">
                            <li>CS1: 1 Đoàn Trần Nghiệp, HBT, Hà Nội</li>
                            <li>CS2: 191 Xã Đàn, Đống Đa, Hà Nội</li>
                            <li>CS3: 116 Trần Quang Diệu, P.14, Q.3, HCM</li>
                        </ul>
                        <p><strong>Điện thoại:</strong> 084 272 96 86</p>
                        <p><strong>Email:</strong> info@caraluna.vn</p>
                        
                        <img src="/placeholder.svg?height=50&width=100" alt="VNPAY" className="mt-4" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">BÀI VIẾT MỚI</h2>
                        <ul className="space-y-4">
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">CỬA HÀNG TRANG SỨC</h2>
                        <ul className="space-y-2">
                            <li>Earrings (Hoa tai)</li>
                            <li>Rings (Nhẫn)</li>
                            <li>Necklaces (Dây chuyền)</li>
                            <li>Bracelets (Vòng tay)</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">HỖ TRỢ</h2>
                        <ul className="space-y-2">
                            <li>Điều khoản dịch vụ</li>
                            <li>Hướng dẫn mua hàng</li>
                            <li>Hướng dẫn thanh toán</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8 text-sm">
                    © Bản quyền thuộc về Caraluna.vn | Cung cấp bởi Sapo
                </div>
            </footer>
        </div>
    );
}    

export default Header;
