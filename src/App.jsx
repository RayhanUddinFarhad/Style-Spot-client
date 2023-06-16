import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/shared/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>

      <div className='overflow-x-hidden'>

        <div className=''>

          <Navbar ></Navbar>

        </div>


        <div className='lg:max-w-[1280px] mx-auto mb-20 mt-20 md:min-h-[calc(100vh-341px)] '>

          <Outlet></Outlet>




        </div>

        <Footer></Footer>

        <ToastContainer></ToastContainer>

      </div>
    </>
  )
}

export default App
