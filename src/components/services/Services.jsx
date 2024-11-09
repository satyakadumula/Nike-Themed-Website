import React from "react";
import './Services.css';
import nikeServices from '../../assets/Services-nike.jpeg'

const Services = () => {
    return (
        <>
            <div className="serves">
                <img src={nikeServices} alt="" />
                <div className="services-down">
                    <h2>Try It, Love It, Wear It</h2>
                    <p>Be sure to get the best fit by visiting a Nike store today.</p>
                    <br />
                    <h2>In-Store Athlete Support</h2>
                    <p>Got a question? Nike store athletes are always game to help.</p>
                    <br />
                    <h2>Buy Online, Pick Up in Store</h2>
                    <p>Place your order on Nike.com and pick it up at your closest Nike store.</p>
                    <br />
                    <h2>60-Day Wear Tests</h2>
                    <p>Returns - dirt and all. Give your Nike gear everything you have and <br />get 60 days to return it. Some exceptions apply.</p>
                </div>
            </div>
        </>
    )
}

export default Services