import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import nikeImg from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
      <div className="logo">
        <img  src={nikeImg} alt="nike-logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink className='header_elements activeBtn' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className='header_elements' to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink className='header_elements' to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink className='header_elements' to='/services'>Services</NavLink>
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
      </div>      
    </nav>
  )
}

export default Navbar
