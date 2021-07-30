import { NavLink } from "react-router-dom";
import styles from './Footer.module.scss';

import { ReactComponent as HeartSvg } from '../../images/footer/heart.svg';
import { ReactComponent as Copyright } from '../../images/footer/copyright.svg';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <div className={`${styles.container} ${styles.footerContainer}`}>
        <div className={styles.firstContainer}>
          <Copyright className={styles.copyrightIcon} />
          <span className={styles.year}>2021</span>
          <span className={styles.reservedText}>All Rights Reserved</span>
          <span className={styles.developerText}>Developed with</span>
        </div>
        <div className={styles.secondContainer}>
          <span className={styles.heart_container}> <HeartSvg className={styles.heartSvg} /></span> 
          <span className={styles.by}>by</span>
          <NavLink to='/contacts' className={styles.footerLink}>
            GoIT Students
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
