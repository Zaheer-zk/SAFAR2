import styles from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

/* eslint-disable react/prop-types */
function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn} onClick={handleClick}>
        &times;
      </button>
    </li>
  );
}

export default CityItem;
