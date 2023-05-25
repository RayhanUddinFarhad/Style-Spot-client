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
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
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
              <h1 className='absolute bottom-5 font-bold text-2xl text-white p-1 '>Men's Dress</h1>
            </SwiperSlide>
            <SwiperSlide className='relative p-2'>


              <img className='rounded-lg' src="https://img.freepik.com/free-photo/beautiful-smiling-young-blonde-woman-pointing-sunglasses-holding-shopping-bags-credit-card-pink-wall_496169-1506.jpg?w=1380&t=st=1684922053~exp=1684922653~hmac=25d9037f1575945d646a767cc11d24acb2bea24eadfa9c667af03012dfc8b796" alt="" />
              <h1 className='absolute bottom-1/2 left-48 font-bold text-2xl text-white p-1 '>Women's Dress</h1>
            </SwiperSlide>         <SwiperSlide className='relative p-2'>


              <img className='rounded-lg' src="https://media.istockphoto.com/id/671789492/photo/attractive-little-cute-girl-in-pink-dress-holds-purple-paper-bag.jpg?s=612x612&w=0&k=20&c=4CZ5MBNOCRI_hxEy_3VWTx2Khz-XJkn3-krkgsIqm0w=" alt="" />
              <h1 className='absolute top-10 right-52 font-bold text-2xl text-white p-1 '>Child's Dress</h1>
            </SwiperSlide>

            <SwiperSlide className='relative p-2'>


              <img className='rounded-lg' src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=" alt="" />
              <h1 className='absolute bottom-1/2  font-bold text-2xl text-gray-100 p-1 '>Others</h1>
            </SwiperSlide>
          </Swiper>
        </div>





      </div>
    </div>
  );
};

export default OrderOnline;