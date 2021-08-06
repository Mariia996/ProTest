import { useDispatch} from 'react-redux';

import {logOut} from '../../redux/auth/auth-operations'
import Button from '../../shared/components/Button'

import styles from './LogOutModal.module.scss'

function LogOutModal({onClose}) {

    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logOut())
        onClose()
    }

    return (
    <div className={styles.logOutModalContainer}>
        <p className={styles.logOutModalText}>Are you sure?</p>
        <div className={styles.logOutModalBtnContainer}>
            <Button className={styles.logOutModalBtn} onClick={onLogout}>Yes</Button>
            <Button className={styles.logOutModalBtn} onClick={onClose}>No</Button>  
        </div>
    </div>)
};

export default LogOutModal;
