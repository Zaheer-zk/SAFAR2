import styles from './Button.module.css';

function Button(type) {
  return (
    <button className={styles.btn} type={type}>
      Button
    </button>
  );
}

export default Button;
