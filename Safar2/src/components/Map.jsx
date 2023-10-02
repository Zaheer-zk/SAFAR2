import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return <div className={styles.mapContainer}>{`Position: ${lat} ${lng}`}</div>;
}

export default Map;
