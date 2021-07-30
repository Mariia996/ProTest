import NavItem from '../NavItem';
import menuItems from '../../../../assets/menuItems.js';
import { v4 } from 'uuid';

import styles from './NavList.module.scss';

function NavList() {
     const navItems = menuItems.map(item => <NavItem key={v4()} {...item} />)
    
    return (
        <ul className={styles.list_nav}>
            {navItems}
        </ul>
    )
};

export default NavList;

