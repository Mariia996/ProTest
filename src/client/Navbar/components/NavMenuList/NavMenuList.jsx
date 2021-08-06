import NavMenuItem from '../NavMenuItem';
import menuItems from '../../../../assets/menuItems.js';
import { v4 } from 'uuid';

import styles from './NavMenuList.module.scss';

const NavMenuList = ({ onClose }) => {
    const navItems = menuItems.map(item => <NavMenuItem key={v4()} {...item} onClick={ onClose}/>)
    
    return (
        <ul className={styles.list_nav}>
            {navItems}
        </ul>
    )
}
export default NavMenuList;