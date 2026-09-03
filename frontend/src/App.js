import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ServiceDetail from './Pages/ServiceDetail';
import ContactPage from './Pages/ContactPage';



function App() {
  return (
      <div className='app'>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceIndex" element={<ServiceDetail />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
