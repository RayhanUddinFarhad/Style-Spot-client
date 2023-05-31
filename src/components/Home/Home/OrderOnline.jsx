import React from 'react';
import SectionTopbanner from '../../shared/sectionTopbanner';
import Slider from 'react-slick';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const OrderOnline = () => {


  return (
    <div>
      <SectionTopbanner subHeading={'---From 11:00am to 10:00pm---'} heading={"Order Online"}></SectionTopbanner>

      <div>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                autoplay: true,

              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='relative p-2 '>


              <img className='rounded-lg' src="https://img.freepik.com/premium-photo/man-holds-packages-gift-box-looks-camera-with-shocking-expression-open-mouth-saying-wow_416530-30510.jpg" alt="" />
              <h1 className='absolute bottom-5 font-extrabold  text-2xl text-white p-1 '>Men's Dress</h1>
            </SwiperSlide>
            <SwiperSlide className='relative p-2'>


              <img className='rounded-lg' src="https://img.freepik.com/free-photo/pretty-young-stylish-woman-pink-luxury-dress-using-mobile-phone-holding-shopping-bags_285396-9673.jpg" alt="" />
              <h1 className='absolute bottom-5 font-bold text-2xl text-white p-1 '>Ladies Dress</h1>
            </SwiperSlide>         <SwiperSlide className='relative p-2'>


              <img className='rounded-lg' src="https://media.istockphoto.com/id/671789492/photo/attractive-little-cute-girl-in-pink-dress-holds-purple-paper-bag.jpg?s=612x612&w=0&k=20&c=4CZ5MBNOCRI_hxEy_3VWTx2Khz-XJkn3-krkgsIqm0w=" alt="" />
              <h1 className='absolute bottom-5 font-bold text-2xl text-white p-1'>Children's Dress</h1>
            </SwiperSlide>

            <SwiperSlide className='relative p-2'>


              <img className='rounded-lg' src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=" alt="" />
              <h1 className='absolute bottom-5 font-bold text-2xl text-white p-1 '>Other Dresses</h1>
            </SwiperSlide>
          </Swiper>
        </div>





      </div>
    </div>
  );
};

export default OrderOnline;