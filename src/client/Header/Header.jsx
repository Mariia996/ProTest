import { useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar from '../Navbar/components/Navbar';
import BurgerMenu from '../../shared/components/BurgerMenuModal';
import NavMenuList from '../Navbar/components/NavMenuList';
// import NavAuth from '../Navbar/components/NavAuth';
import Logo from '../../shared/components/Logo';

import styles from './Header.module.scss';

import { ReactComponent as Burger } from '../../images/burger-menu/burger.svg';
import { ReactComponent as CloseIcon } from '../../images/burger-menu/close.svg';
import { ReactComponent as LogOut } from '../../images/burger-menu/logout.svg';

function Header() {
    const [openBurger, setOpenBurger] = useState(false)

    const toggleBurger = () => {
        setOpenBurger(!openBurger);
    }

    return (
      <header className={styles.header}>
            <div className={styles.container}>
                 
                <div className={styles.logo_container}>
                    <Logo/>
                </div>

                {/* <Navbar /> */}
                
                <div className={styles.user}>

                </div>
                
                <div className={styles.right_side_wrapper}>
                  {openBurger ? <CloseIcon onClick={toggleBurger} /> : <button type='button' className={styles.burger_button} onClick={toggleBurger} ><Burger/></button>} 
                </div>
                <div className={styles.nav_contacts_wrapper}>
                     <NavLink to='/contacts' className={styles.link_nav} activeClassName={styles.activeNavLink}>
                         Contacts
                     </NavLink>
                </div> 
                {openBurger && <BurgerMenu>
                    <div className={styles.wrapper_nav_list}>
                        <NavMenuList />
                        {/* <NavAuth/> */}
                    </div>  
                   <button type='button' className={styles.logout_icon}><LogOut/></button> 
                </BurgerMenu>} 
            </div>
        
         </header>
    )
};

export default Header;
