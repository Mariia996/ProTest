import styles from './Footer.module.scss';

import { ReactComponent as HeartSvg } from './heart.svg';
import { ReactComponent as Copyright } from './copyright.svg';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <div className={`${styles.container} ${styles.footerContainer}`}>
        <div className={styles.firstContainer}>
          <span className={styles.copyright}>
            <Copyright className={styles.copyrightIcon} />
          </span>
          <span className={styles.year}>2021</span>
          <span className={styles.reservedText}>All Rights Reserved</span>
          <span className={styles.developerText}>Developed with</span>
          <span className={styles.footerIcon}>
            <HeartSvg className={styles.heartSvg} />
          </span>
        </div>
        <div className={styles.secondContainer}>
          <span className={styles.by}>by</span>
          <a href="#" className={styles.footerLink}>
            GoIT Students
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
