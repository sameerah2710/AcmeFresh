import React from 'react'
import "./Footer.css"
const Footer = () => {
  
    return (
      <>
        <div className='footer'>
            <div className='footerAcmeFresh'>
                <h1>Acme Fresh</h1>
                <p>Acme Fresh is state of the art Hydroponic farm company.
                     We provide end-to-end Hydroponic solutions. 
                     From setting up Hydroponic farm infrastructure, 
                     Automating farm using modern techniques to selling hydroponic produce to custumers.  
                </p>
            </div>
            <div className='verticalDiv'></div>
            <div className='footerWalkThrough'>
                <h1>Explore</h1>
                <p>About Us</p>
                <p>Hydroponic Farm</p>
                <p>Services</p>
                <p>Automation</p>
                <p>Contact Us</p>
            </div>
            <div className='footerBusinessHours'>
                <h1>Business Hours</h1>
                <h3>MONDAY - FRIDAY</h3>
                <h5>10.00am - 6.00pm</h5>
                <h3>SATURDAY & SUNDAY</h3>
                <h5>Close</h5>
            </div>
            <div className='footerContactUs'>
                <h1>Contact Us</h1>
                <p><b>Address</b>:  220,Amravti MIDC, Nagpur Mumbai Bypass, Amravti</p>
                <p><b>EMAIL</b>:   acmefresh@gmail.com</p>
                <p><b>PHONE</b>:   +91 70200 64547</p>
                <div className='socialMediaIcon'>
                    <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="facebook" /></a>
                    <a href="https://www.twitter.com/"><img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" alt="Twitter" /></a>
                   <a href="https://www.youtube.com/"> <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
                </div>
            </div>
        </div>
      </>
    )
  
}
export default Footer