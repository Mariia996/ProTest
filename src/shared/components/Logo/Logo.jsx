import { Link } from 'react-router-dom';

import { ReactComponent as LogoSite } from './logo.svg';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <LogoSite className={styles.logo} />
    </Link>
  );
};

export default Logo;
