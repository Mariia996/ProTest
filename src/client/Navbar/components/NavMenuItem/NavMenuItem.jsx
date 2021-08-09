import { NavLink } from "react-router-dom";

import styles from './NavMenuItem.module.scss';

const NavMenuItem = ({ to, page, onClick }) => {
    return (
        <>
            <li className={styles.item_nav} onClick={onClick}>
                <span>
                <NavLink to={to} className={styles.link_nav} activeClassName={styles.activeNavLink} >
                    {page}
                </NavLink>
                </span>
         </li>
            <span className={styles.horizontal_line}></span>
         </>
     );
}

export default NavMenuItem;
