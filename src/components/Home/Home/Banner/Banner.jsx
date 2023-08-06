import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import shop1 from '../../../../assets/images/shop-1.jpg'
import shop2 from '../../../../assets/images/shop-2.jpg'
import shop3 from '../../../../assets/images/shop-3.jpg'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import girl2 from '../../../../assets/images/girl2.png'
import girl3 from '../../../../assets/images/girl-3.png'
import girl4 from '../../../../assets/images/girl-4.png'
import men3 from '../../../../assets/images/men3.png'
import { FaMagnet, FaSearch } from 'react-icons/fa';


// import required modules

const Banner = () => {









  return (




    <div className='relative md:min-h-[calc(100vh-452px)] bg-[#e3ffe6]'>
      <svg className='w-10 left-20 bottom-20 absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M42.5,0.2C42.5,21.8,21.3,43.5,0.2,43.5C-20.9,43.5,-41.7,21.8,-41.7,0.2C-41.7,-21.3,-20.9,-42.6,0.2,-42.6C21.3,-42.6,42.5,-21.3,42.5,0.2Z" transform="translate(100 100)" />
      </svg>

      <svg className='w-10 left-52 bottom-16 absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#43b97f" d="M42.5,0.2C42.5,21.8,21.3,43.5,0.2,43.5C-20.9,43.5,-41.7,21.8,-41.7,0.2C-41.7,-21.3,-20.9,-42.6,0.2,-42.6C21.3,-42.6,42.5,-21.3,42.5,0.2Z" transform="translate(100 100)" />
      </svg>

      <svg className='w-20 left-[40%] top-16 absolute lg:left-0 lg:top-0' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#c280d2" d="M42.5,0.2C42.5,21.8,21.3,43.5,0.2,43.5C-20.9,43.5,-41.7,21.8,-41.7,0.2C-41.7,-21.3,-20.9,-42.6,0.2,-42.6C21.3,-42.6,42.5,-21.3,42.5,0.2Z" transform="translate(100 100)" />
      </svg>


      <div className=" w-full max-sm:px-4 md:px-8 lg:px-16">

        <div className='max-sm:flex max-sm:flex-col max-sm:items-center lg:flex lg:flex-row lg:justify-center lg:items-center '>


          <div className='space-y-5 w-full max-sm:text-center lg:w-[60%] '>
            <p className='text-2xl whitespace-nowrap'>In this season, find the best 🔥</p>
            <h1 className='text-4xl font-bold '>Exclusive collection for everyone</h1>
            <button className='button-primary whitespace-nowrap flex items-center justify-center mx-auto lg:mx-0'>Explore More <FaSearch className='ml-2'></FaSearch></button>

          </div>
          <div className='h-full relative'>
            <img className='w-full max-sm:h-auto max-w-md max-sm:mt-8 lg:h-full lg:w-auto' src={girl4} alt="" />

            <svg className='w-32 right-0 top-0 absolute' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f7a082" d="M42.5,0.2C42.5,21.8,21.3,43.5,0.2,43.5C-20.9,43.5,-41.7,21.8,-41.7,0.2C-41.7,-21.3,-20.9,-42.6,0.2,-42.6C21.3,-42.6,42.5,-21.3,42.5,0.2Z" transform="translate(100 100)" />
      </svg>
          </div>
        </div>


      </div>
    </div>

    // <div className='relative '>


    //   <img className=' w-full object-contain' src={shop1} alt="" />




    //   <div className='absolute right-5 top-3 sm:top-1/2  lg:right-5 lg:top-1/2 lg:space-y-5 space-y-2 lg:w-auto w-48 sm:w-auto'>

    //     <h1 className='lg:text-5xl sm:text-4xl text-xl text-gray-50 font-extrabold' style={{ margin: 'auto 0' }}>
    //       Life is{' '}
    //       <span className='text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text font-extrabold lg:text-5xl' style={{ fontWeight: 'bold' }}>
    //         <Typewriter
    //           words={['Fashionable', 'Exciting', 'Inspiring']}
    //           loop={3}
    //           cursor
    //           cursorStyle='_'
    //           typeSpeed={70}
    //           deleteSpeed={50}
    //           delaySpeed={1000}
    //         />
    //       </span>
    //     </h1>

    //     <h1 className='lg:text-3xl text-white w-full'>
    //       Discover Trendsetting  Fashion for  Every Occasion
    //     </h1>


    //   </div>
    // </div>
  );
};

export default Banner;