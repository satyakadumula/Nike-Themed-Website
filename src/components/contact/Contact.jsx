import React from "react";
import './Contact.css'
import contactNike from '../../assets/Contact-nike.jpeg'

const Contact = () => {
    return (
        <>
            <div className="contact-content">
                <img src={contactNike} alt="" />
                <div className="motive">

                    <p style={{marginTop:'-50px',marginBottom:'40px'}}>“<span className="spanText">Greatness Is not born</span>,<br/>
                    <span style={{color:'rgb(169, 5, 2)',paddingLeft:'4rem'}}>It is made</span>.”</p>
                
                    <div className="sendMail">
                        <h2>Wanna say something?</h2>
                        <div className="mailLink">
                            <a href="mailto:satyakadumula009@gmail.com">Send us a mail</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact