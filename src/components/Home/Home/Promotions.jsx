import React from 'react';
import SectionTopbanner from '../../shared/sectionTopbanner';
import img1 from '../../../assets/images/promotion1.png'

import img2 from '../../../assets/images/promotion2.png'
import Slider from "react-slick";
import img3 from '../../../assets/images/promotion3.png'


const Promotions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,

        autoplay: true,

      };
  
    return (
      <div className=''>
        <SectionTopbanner  heading="Promotions" />
        <div >
          <Slider    {...settings}>
            <div className=''>
              <div className="w-full h-[270px] bg-[#FFF6FB] p-5 flex justify-center items-center">
                <div className="space-y-5 ">
                  <h1 className="text-primary font-bold text-xl">
                    23% Off for Man products
                  </h1>
                  <button className="border-b border-red-600 text-red-600 font-bold">
                    Shop Now
                  </button>
                </div>
                <img className="h-full" src={img1} alt="" />
              </div>
            </div>
  
            <div>
              <div className="w-full h-[270px] bg-[#EEEFFB] p-5 flex justify-center items-center">
                <div className="space-y-5">
                  <h1 className="text-primary font-bold text-xl">
                    23% Off for Ladies products
                  </h1>
                  <button className="border-b border-red-600 text-red-600 font-bold">
                    View Collection
                  </button>
                </div>
                <img className="h-full" src={img2} alt="" />
              </div>
            </div>
  
            <div>
              <div className="w-full h-[270px] bg-[#EEEFFB] p-5 flex justify-center items-center">
                <div className="space-y-5">
                  <h1 className="text-primary font-bold text-xl">
                    50% Off for Child products
                  </h1>
                  <button className="border-b border-red-600 text-red-600 font-bold">
                    View Collection
                  </button>
                  
                </div>
                <img className="h-full" src={img3} alt="" />
              </div>
            </div>
          </Slider>
          
        </div>
      </div>
    );
  };
  
  export default Promotions;