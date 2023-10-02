import { useParams, useSearchParams } from 'react-router-dom';
import styles from './City.module.css';

function City() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <>
      <div className={styles.city}>City {id}</div>
      <h2>{`Current  lat: ${lat} , lng: ${lng}`}</h2>
    </>
  );
}

export default City;
