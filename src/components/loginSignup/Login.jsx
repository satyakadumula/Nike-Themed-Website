import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import justDoIt from '../../assets/justdoit.jpeg'

const Login = () => {
  return (
    <div className='login-main'>
      <div className='nike-sacrifice'>
        <p style={{marginTop:'-50px',marginBottom:'40px',color:'aliceblue'}}>“Believe in onething,<br/> 
        Even if it means<br/><span style={{color:'rgb(169, 2, 2)'}}>sacrificing everything</span>.”</p>
        <div className='login-details'>
            <input type="text" placeholder='Email / UserName' />
            <input type="password" placeholder='Password' />
            
            <p style={{fontSize:'15px',fontFamily:'monaco'}}>Forgot Password?
            <span className='click-here'>
              <a href="" style={{color:'white'}}>click here!</a>
            </span>
            </p>
            <p style={{fontSize:'15px',fontFamily:'monaco',marginTop:'-10px'}}>Not registered yet?
            <span className='click-here'>
              <Link to="/signup" style={{color:'white'}}>Sign up!</Link>
            </span>
            </p>
            <button className='login-signup-button' style={{marginTop:'10px'}}>GetIn</button>
        </div>
      </div>
      <div>
        <img className='your-limit-is-you' src={justDoIt} alt="" />
      </div>
    </div>
  )
}

export default Login
