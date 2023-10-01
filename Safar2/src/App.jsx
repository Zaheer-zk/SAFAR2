import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// imports
import Homepage from './Pages/Homepage';
import Product from './Pages/Product'; // normal export
import { Pricing } from './Pages/Pricing'; // named export
import { PageNotFound } from './Pages/PageNotFound';

function App() {
  // react-router-dom@6
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} /> {/* 👈 Renders at /app/ */}
        <Route path='/product' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
