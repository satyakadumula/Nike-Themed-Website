import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import nikeLogo from '../../assets/Nikelogo.jpeg'

const Signup = () => {
  return (
    <div className='main'>
      <div>
        <img className='nike-logo' src={nikeLogo} alt="" />
      </div>
      <div className="right-section">
            <div className='signup-para'>
                <p>“Start Unknown,<br/><span style={{color:'rgb(169, 2, 2)'}}>Finish Unforgettable</span>.”</p>
            </div>

            <div className='signup-details'>
                <input type="email" placeholder='Mail' />
                <input type="text" placeholder='UserName' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                
                <p style={{color:'aliceblue'}}>Have an account Already?
                <span className='click-here'>
                    <Link to="/login" style={{paddingLeft:'10px',color:'white'}}>Login!</Link>
                </span>
                </p>
                <button className='login-signup-button' style={{marginTop:'10px'}}>Submit</button>
            </div>
        </div>

    </div>
  )
}

export default Signup
