import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import banner1 from '../.././../../assets/images/man3.png'
import banner2 from './../../../../assets/images/family1.png'
import banner3 from '../../../../assets/images/banner3.png'

import banner4 from '../../../../assets/images/girl1.png'

import bannerbg from '../../../../assets/images/bannerbg.png'


const Banner = () => {

  const [category, setCategory] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,


  };




  useEffect(() => {

    fetch(`http://localhost:3000/category`)
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])

  console.log(category)


  return (
    <div className='px-5 '>
      <div className='h-full bg-[#F2F0FF]'   >
        <div>
          <div className='lg:flex  p-5 justify-around items-center'>
            <div className='space-y-5'>
              <p className='text-red-600 font-semibold'>Discover the Perfect Dress Collection for Your Family...</p>
              <h1 className='text-5xl font-bold'>Explore the Latest Dress Trends in 2023</h1>
              <p>Experience unparalleled style and elegance with our curated selection of dresses. Find the perfect outfit for any occasion that will make you stand out. </p>
              <button className='bg-[#FB2E86] p-2 rounded text-white'>Shop Now</button>
            </div>


            <div>

              <img className='object-contain' src={banner3} alt="" />
            </div>







          </div>
        </div>
        <div>


        </div>


      </div>
    </div>
  );
};

export default Banner;