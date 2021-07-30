import { NavLink } from "react-router-dom";
import styles from './NavItem.module.scss';

function NavItem({ to, page }) {
    return (
         <li className={styles.item_nav}>
                <NavLink to={to} className={styles.link_nav} activeClassName={styles.activeNavLink}>
                    {page}
                </NavLink>
         </li>
    )
};

export default NavItem;

