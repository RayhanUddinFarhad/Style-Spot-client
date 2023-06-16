import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import shop1 from '../../../../assets/images/shop-1.jpg'
import shop2 from '../../../../assets/images/shop-2.jpg'
import shop3 from '../../../../assets/images/shop-3.jpg'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {

  







  return (
    

    <div className='relative '>


      <img className=' w-full object-contain' src={shop1} alt="" />




      <div className='absolute right-5 top-3 sm:top-1/2  lg:right-5 lg:top-1/2 lg:space-y-5 space-y-2 lg:w-auto w-48 sm:w-auto'>

        <h1 className='lg:text-5xl sm:text-4xl text-xl text-gray-50 font-extrabold' style={{ margin: 'auto 0' }}>
          Life is{' '}
          <span className='text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text font-extrabold lg:text-5xl' style={{ fontWeight: 'bold' }}>
            <Typewriter
              words={['Fashionable', 'Exciting', 'Inspiring']}
              loop={3}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <h1 className='lg:text-3xl text-white w-full'>
          Discover Trendsetting  Fashion for  Every Occasion
        </h1>


      </div>
    </div>
  );
};

export default Banner;