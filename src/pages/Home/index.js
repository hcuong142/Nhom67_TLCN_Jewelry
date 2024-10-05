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
        // console.log("check", res);
        if(res && res.data && res.data.data) {
            setListUsers(res.data.data);
        }
    }
    
    return <div className={styles.wrapper}>
        
        
        <img className={styles.img} src="//bizweb.dktcdn.net/100/461/213/themes/870653/assets/slider_1.jpg?1727430576753" alt="Bộ Sưu Tập Resort ' 2024" class="img-responsive center-block"></img>
        {listUsers.map((user, index) => {
            return <div key={`users-${index}`}>
                {user.email}
            </div>
        })}
    </div>;
}

export default Home;
