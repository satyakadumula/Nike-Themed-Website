import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Herosection.css'
import redShoeImg from '../../assets/shoe.png'
import amazonImg from '../../assets/amazonlogo.png'
import flipkartImg from '../../assets/flipkartlogo.png'

const Herosection = () => {
    console.log("Herosection is rendering");
  return (
    <div>
      <Navbar/>
      <section className = 'herosection'>
            <div className="leftSection">
                <h1>YOUR FEET DESERVE <br /> <span style={{color:'rgb(160, 0, 0)'}}>THE BEST</span></h1>
                <p className='specialPara'>Nike doesn't want to make products for everyone - 
                    they want to make products for champions.Champions are not the ones who always win races - 
                    champions are the ones who get out there and try. 
                </p>
                <div className="shopncategory">
                    <Link to="/shopNow" style={{textDecoration:"None"}}><button>Shop Now</button></Link>
                    <button className='changebtn'>Category</button>
                </div>
                <div className="available">
                    <p style={{fontWeight:'bold',fontSize:'15px'}}>Also available on</p><br />
                    <a href="https://www.amazon.in/s?k=Nike+shoes&crid=1NKPGMIONJM7D&sprefix=nike+shoe%2Caps%2C234&ref=nb_sb_noss_1"><img src={amazonImg} alt="amazon"  className='amazonlogo' /></a>
                    <a href="https://www.flipkart.com/search?q=Nike%20Shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"><img src={flipkartImg} alt="flipkart" className='flipkartlogo'/></a>
                </div>
            </div>
            <div className="rightSection">
                <img src={redShoeImg} alt="red shoes bujji"/>
            </div>
        </section>
    </div>
  )
}

export default Herosection
