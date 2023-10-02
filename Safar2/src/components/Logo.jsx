import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to='/'>
      <h1 className={styles.logo}>SAFAR</h1>
    </Link>
  );
}

export default Logo;
