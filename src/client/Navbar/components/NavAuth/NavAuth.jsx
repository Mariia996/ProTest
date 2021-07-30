import React from 'react';
import { NavLink } from "react-router-dom";

import styles from './NavAuth.module.scss';

function NavAuth() {
    return (
        <>
        <span>
         <NavLink to='/contacts' className={styles.link_nav} activeClassName={styles.activeNavLink}>
             Contacts
        </NavLink>
        </span>
        <span className={styles.horizontal_line}></span>  
        </>
    )
};

export default NavAuth;
