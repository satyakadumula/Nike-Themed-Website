import { useState } from 'react'
import './App.css';
import Herosection from './components/herosection/Herosection';
// import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Herosection/>} />
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>    
    </>
  );
}

export default App
