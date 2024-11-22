import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import nikeImg from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(()=>{
    const ul = document.querySelector('.menu ul');
    if(menuOpen){
      ul.classList.add('active');
      setTimeout(()=>{
        ul.style.display = "flex";
      },50);
    }else{
      ul.classList.remove('active');
    }
  },[menuOpen])
  
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={nikeImg} alt="nike-logo" />
        </div>
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li className='first'>
              <NavLink className='header_elements' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='header_elements' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className='header_elements' to='/contact'>Contact</NavLink>
            </li>
            <li className='last'>
              <NavLink className='header_elements ' to='/services'>Services</NavLink>
            </li>
          </ul>
        </div>
        <div className="Login-Signup">
          <button type='button' className='navbarBtn'>
            <Link to='/login' className="loginbtn">Login</Link>
          </button>
          <button type='button' className='navbarBtn'>
            <Link to='/signup' className="loginbtn">SignUp</Link>
          </button>
        </div>
        <div id="nav-icon" onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
