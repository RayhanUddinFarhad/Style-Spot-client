import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/shared/Footer'

function App() {

  return (
    <>

    <div className='pb-32'>

    <Navbar ></Navbar>

    </div>


    <div className='lg:max-w-[1280px] mx-auto mb-20 '>

    <Outlet></Outlet>


    

    </div>

    <Footer></Footer>
     
    </>
  )
}

export default App
