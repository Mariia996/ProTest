import { useDispatch, useSelector, shallowEqual} from 'react-redux';
import { ReactComponent as LogOut } from '../../../../images/navigation/sign-out.svg';
import {logOut} from '../../../../redux/auth/auth-operations'

import styles from './UserInfo.module.scss'

const UserInfo = () => {
    const email = useSelector(state => state.auth.user.email, shallowEqual)
    const dispatch = useDispatch()
    const onLogout = () => dispatch(logOut())
    
    // const email = "m.k@mail.com"

    return (
        <div className={styles.containerUser}>
            <span className={ styles.firstLetter}>{email.slice(0, 1).toUpperCase()}</span>
            <span className={ styles.email}>{email}</span>
            <LogOut className={styles.btnLogOut} onClick={onLogout}></LogOut>
        </div>);
}

export default UserInfo;