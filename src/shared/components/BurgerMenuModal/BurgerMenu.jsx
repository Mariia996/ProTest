import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ onClose, children}) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const [openBurger, setOpenBurger] = useState(false)

    // const toggleBurger = () => {
    //     setOpenBurger(!openBurger);
    // }

    const handleKeyDown = useCallback(
        (e) => {
            if (e.code === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const modalRoot = document.querySelector('#modal-root');
    return (
        createPortal(
            <div className={openBurger ? styles.close_menu : styles.open_menu}>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>, modalRoot)
     );
}


export default BurgerMenu;

BurgerMenu.defaultProps = {
    onClose: () => {}
}

BurgerMenu.propTypes = {
    onClose: PropTypes.func.isRequired
}
