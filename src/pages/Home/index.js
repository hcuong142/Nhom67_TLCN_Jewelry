import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { fetchAllUser } from '../../../src/services/api/api';


function Home() {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {

        getUsers();
    }, [])

    const getUsers = async () => {
        let res = await fetchAllUser();
        console.log("check", res);
        if(res && res.data && res.data.data) {
            setListUsers(res.data.data);
        }
    }
    
    return (
    
        <div className={styles.wrapper}>
            <div>
                <img className={styles.img} src="https://bizweb.dktcdn.net/100/461/213/themes/870653/assets/slider_1.jpg?1728012064200" alt="Bộ Sưu Tập Resort ' 2024"></img>
            </div>
            {/* {listUsers.map((user, index) => {
                return <div key={`users-${index}`}>
                    {user.email}
                </div>
            })} */}


            <div className={styles.section}>
                <div className={styles.box}>
                    <div>
                        <img width="50" height="50" className={styles.lazyLoad} src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_1.png?1728012064200" data-src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_1.png?1728012064200" alt="Caraluna" data-was-processed="true"></img>
                    </div>
                    <div className={styles.info}>
                        <span>MIỄN PHÍ vận chuyển</span>
                        <span>Đơn Hàng từ 950.000VNĐ</span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div>
                        <img width="50" height="50" className={styles.lazyLoad} src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_2.png?1728012064200" data-src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_2.png?1728012064200" alt="Caraluna" data-was-processed="true"></img>
                    </div>
                    <div className={styles.info}>
                        <span>Đổi trả MIỄN PHÍ</span>
                        <span>Trong vòng 30 NGÀY</span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div>
                        <img width="50" height="50" className={styles.lazyLoad} src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_3.png?1728012064200" data-src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_3.png?1728012064200" alt="Caraluna" data-was-processed="true"></img>
                    </div>
                    <div className={styles.info}>
                        
                        <span>Dịch vụ BẢO HÀNH</span>
                        <span>Làm mới TRỌN ĐỜI</span>
                    </div>
                </div>
                <div className={styles.box}>
                    <div>
                        <img width="50" height="50" className={styles.lazyLoad} src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_4.png?1728012064200" data-src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/ser_4.png?1728012064200" alt="Caraluna" data-was-processed="true"></img>
                    </div>
                    <div className={styles.info}>
                        <span>Túi & hộp TRANG NHÃ</span>
                        <span>Sẵn sàng TRAO TẶNG</span>
                    </div>
                </div>
            </div>

            <div className={styles.titleModules}>
                TOP Best Sellers
            </div>

        </div>
    )
}

export default Home;
