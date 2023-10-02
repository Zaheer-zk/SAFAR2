import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// imports
import Homepage from './Pages/Homepage';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import AppLayout from './Pages/AppLayout';
import CityList from './components/CityList';
import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';

const BASE_URL = 'http://localhost:9000';

function App() {
  // Fetch from json server
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch {
        alert('Fetching cities failed');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  // react-router-dom@6
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} /> {/* 👈 Renders at /app/ */}
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />}>
          <Route path='cities/:id' element={<City />} />
          <Route index element={<Navigate to='cities' replace />} />
          <Route
            path='cities'
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path='countries'
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
