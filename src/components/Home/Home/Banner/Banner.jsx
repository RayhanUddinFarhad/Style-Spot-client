import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import banner1 from './../../../../assets/images/banner1.png'
import banner2 from '../.././../../assets/images/banner2.png'
import bannerbg from '../../../../assets/images/bannerbg.png'

const Banner = () => {

    const [category, setCategory] = useState  ([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    
      };




    useEffect (() => {

        fetch (`http://localhost:3000/category`)
        .then (res =>  res.json())
        .then (data => setCategory(data))
     }, [])

     console.log (category)


    return (
        <div className='px-5'>
        <Slider {...settings}>
          <div>
           <div className='lg:flex bg-[#F2F0FF] p-5 justify-around items-center'>
          <div className='space-y-5'>

          <h1 className='text-5xl font-bold'>New Dress Trends In 2023</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis facere molestiae aperiam est culpa quam delectus sapiente libero velit inventore!</p>
            <button className='bg-[#FB2E86] p-2 rounded text-white'>Shop Now</button>
          </div>


          <div>

            <img src= {banner1} alt="" />
          </div>







           </div>
          </div>
         <div>

         <div className='lg:flex bg-[#F2F0FF] p-5 justify-around items-center'>
          <div className='space-y-5'>

          <h1 className='text-5xl font-bold'>New Dress Trends In 2023</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis facere molestiae aperiam est culpa quam delectus sapiente libero velit inventore!</p>
            <button className='bg-[#FB2E86] p-2 rounded text-white'>Shop Now</button>
          </div>


          <div>

          <img   src={banner2} alt="" />
          </div>







           </div>
         </div>
          
         
        </Slider>
      </div>
    );
};

export default Banner;