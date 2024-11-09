// import { useState } from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Herosection from './components/herosection/Herosection';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Herosection/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>    
    </>
  );
}

export default App
