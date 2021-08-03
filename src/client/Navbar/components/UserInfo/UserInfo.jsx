import { useSelector, shallowEqual} from 'react-redux';

import styles from './UserInfo.module.scss'

const UserInfo = () => {
    const email = useSelector(state => state.auth.user.email, shallowEqual)

    return (
            <div className={styles.containerUser}>
                <span className={styles.firstLetter}>{email.slice(0, 1).toUpperCase()}</span>
                <span className={styles.email}>{email}</span>
            </div>
    );
}

export default UserInfo;