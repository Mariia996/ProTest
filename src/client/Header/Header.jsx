import { useState } from "react";
import { useSelector, shallowEqual} from 'react-redux';
import { NavLink } from "react-router-dom";

import Navbar from '../Navbar/components/Navbar';
import BurgerMenu from '../../shared/components/BurgerMenuModal';
import NavMenuList from '../Navbar/components/NavMenuList';
import NavAuth from '../Navbar/components/NavAuth';
import UserInfo from '../Navbar/components/UserInfo';
import Logo from '../../shared/components/Logo';
import Modal from '../../shared/components/Modal'
import LogOutModal from '../LogOutModal'

import styles from './Header.module.scss';

import Hamburger from 'hamburger-react';
import { ReactComponent as LogOut } from '../../images/burger-menu/logout.svg';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

function Header() {
    const [openBurger, setOpenBurger] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const isAuthorized = useSelector(state => getIsAuthenticated(state), shallowEqual);

    const toggleBurger = () => {
        setOpenBurger(!openBurger)
    }
    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    return (
      <header className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logo_container}>
                    <Logo/>
                </div>

                {isAuthorized ?
                    <div className={styles.navbar_wrapper}>
                     <Navbar />
                    </div> :
                    <div className={styles.nav_contacts_wrapper}>
                     <NavLink to='/contacts' className={styles.link_nav} activeClassName={styles.activeNavLink}>
                         Contacts
                     </NavLink>
                </div> }
                <div className={styles.userInfo_container}>
                    {isAuthorized &&
                        <UserInfo/>
                    }
                </div>

                <div className={styles.right_side_wrapper}>
                    <Hamburger toggled={openBurger} toggle={setOpenBurger} size={20} />
                </div>

                    {openBurger && <BurgerMenu>
                    <div className={styles.wrapper_nav_list}>
                        {isAuthorized ? <NavMenuList onClose={toggleBurger}/> : <NavAuth/>}
                    </div>
                    {openModal && (<Modal onClose={toggleModal}><LogOutModal onClose={toggleModal} /></Modal>)}
                  {isAuthorized && <LogOut className={styles.logout_icon} onClick={toggleModal} />}
                </BurgerMenu>}

                {isAuthorized && <div className={styles.logout_wrapper}>
                 {openModal && (<Modal onClose={toggleModal}><LogOutModal onClose={toggleModal} /></Modal>)}
                <LogOut className={styles.btnLogOut} onClick={toggleModal} />
                </div>}
            </div>
         </header>
    )
};

export default Header;
