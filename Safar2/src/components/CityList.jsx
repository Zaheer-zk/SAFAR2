import styles from './CityList.module.css';

//comp import
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';

/* eslint-disable react/prop-types */
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length == 0) return <Message message='Add your first city' />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
