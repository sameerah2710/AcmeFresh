import React from 'react'
import Footer from './footer/Footer'
import "./HomePage.css"
import Navbar from './navbar/navbar'
const HomePage = () => {
  return (
    <>
   
    <div className='homePage'>
      
      <p className='homePageHead'>Indias Largest Hydroponic Farm</p>
       <div className='one'>
          <p className='oneLeft'>WHY HYDROPONICS?</p>
          <p className='oneRight'>Plants grown in soil need a more space to spread out as the roots reach out as far as possible into the soil to capture as much water and nutrients as possible. Soil holds water and nutrients for only few minutes before it is filtered down the water table, or gets soaked up by other plants nearby. That makes it nearly impossible to control exactly how much water each of your plants receive, or which nutrients they benefit from in the process.</p> 
      </div>
      <p className='farmSummery'>SUMMERY OF FARMNING IN INDIA</p>
      <p className='farmArea'>NORTHEN INDIA - 45 ACRES</p>
      <p className='farmArea'>ESTERN INDIA - 5 ACRES</p>
      <p className='farmArea'>SOUTHERN INDIA - 20 ACRES</p>
      <p className='farmArea'>WESTERNN INDIA -30 ACRES</p>
      <p className='farmArea'>CENTRAL INDIA -10 ACRES</p>
      <p className='farmArea'>NORTH EAST INDIA -4 ACRES</p>
      <div className='two'>
          <div className='twoTop'>
              <div className='twoTopLeft'>
                  <p>WHO ARE WE</p>
              </div>
              <div className='twoTopRight'>
                  <p> 
                      We provide end-to-end Hydroponic solutions. 
                      From setting up Hydroponic farm infrastructure, 
                      Automating farm using modern techniques to selling hydroponic produce to custumers.
                 </p>
              </div>
          </div>
         <div className='twoBottom'>
               <div className='twoLeft'>
              </div>
              <div className='twoRight'>  
                 <p id='wCUS'>
                     Why Choose Us 
                 </p>
                 <p>
                     We use Hydroponics
                     Solution to grow fresh high value and high yield vegetables,
                     herbs, leafy greens and fruits in a limited space.
                 </p>
                  <div className='whatWP'>
                     <div className='whatWPL'>
                         <p>Qualified Staff</p>
                         <p>Plumbing.</p>
                         <p>Electrical Works.</p>
                         <p>Polyhouse Fabrication.</p>
                         <p>Fertigation Units.</p>
                         <p>Farm automation.</p>
                     </div>
                     <div className='whatWPR'>
                         <p>Excellent Services</p>
                         <p>Quick installation.</p>
                         <p>On-site training.</p>
                         <p>Access to produce buyers.</p>
                         <p>Handholding</p>
                         <p>Agronomy Services.</p>
                     </div>
                  </div>
              </div>   
          </div> 
          
      </div>
      <div className='oneB'>
          <h1>LOOKING FOR SETTING UP YOUR OWN HYDROPHONIC FARM</h1>
          <h2>GET IN TOUCH WITH OUR EXICATIVES</h2>
          <h3>You can e-mail us or call us on below details.</h3>
      </div>
  </div>
 
    </>
    
  )
}

export default HomePage