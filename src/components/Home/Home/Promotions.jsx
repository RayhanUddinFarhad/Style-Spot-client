import React from 'react';
import SectionTopbanner from '../../shared/sectionTopbanner';
import img1 from '../../../assets/images/promotion1.png'

import img2 from '../../../assets/images/promotion2.png'
import Slider from "react-slick";


const Promotions = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <SectionTopbanner heading={"Promotions"}></SectionTopbanner>

            <div className='grid lg:grid-cols-5 '>

                <div className='w-[420px] col-span-2 h-[270px] bg-[#FFF6FB] p-5 space-y-4 flex justify-center items-center'>
                    <div>

                    <h1 className='text-primary font-bold text-xl'>23% Off for all products</h1>
                    <button className='border-b border-red-600 text-red-600  font-bold'>Shop Now</button>
                    </div> 
                    <img className='h-full' src= {img1} alt="" />




                </div>


                <div className='w-[420px] h-[270px] col-span-2 bg-[#EEEFFB] p-5 space-y-4 flex justify-center items-center'>
                    <div>

                    <h1 className='text-primary font-bold text-xl'>23% Off for all products</h1>
                    <button className='border-b border-red-600 text-red-600  font-bold'>Shop Now</button>
                    </div>
                    <img className='h-full' src= {img2} alt="" />




                </div>

                <div className=' bg-[#FFF6FB] p-5 space-y-4 flex justify-center items-center col-span-'>
                    <div>



                    
                    </div>




                </div>


               



            </div>
        </div>
    );
};

export default Promotions;