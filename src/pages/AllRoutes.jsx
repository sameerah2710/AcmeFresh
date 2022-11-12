import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Automation from '../components/Automation';
import Footer from '../components/footer/Footer';
import HomePage from '../components/HomePage';
import Navbar from '../components/navbar/navbar';
import Products from '../components/Products';





const AllRoutes = ()=>{
   return(
   <>
     <Navbar/>
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/product' element={<Products/>}/>
         <Route path='/automation' element ={<Automation/>}/>
      </Routes>
      <Footer/>
   </>
   )
}
export default AllRoutes;