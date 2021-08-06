import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CloseIcon } from '../../../images/logout-modal/close.svg';
import styles from './Modal.module.scss';

const Modal = ({ children, onClose }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleKeyDown = useCallback(
        (e) => {
            if (e.code === "Escape") {
                onClose();
            }
        },
        [onClose]
    );

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    const modal = document.querySelector('#modal');
    return (
        createPortal(<div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modalLayout}>
                <div className={styles.modalContent}>
                    <CloseIcon className={styles.closeBtnIcon} onClick={onClose}/>
                    {children}
                </div>
            </div>
        </div>, modal)
     );
}

export default Modal;