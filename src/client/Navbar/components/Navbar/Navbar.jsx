import React from "react";
import styles from './Navbar.module.scss';

import NavList from '../NavList';

const Navbar = () => {

    return ( 
         <div className={styles.navbar_container}>
            <NavList/>
         </div>
     );
}

export default Navbar;