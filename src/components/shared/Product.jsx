import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// ..
AOS.init();

const Product = ({ data }) => {
  return (


    <div className=''>
      <Link to={`/details/${data._id}`}  data-aos="fade-up" data-aos-duration="1000"
        className="card lg:w-96 w-72 mx-auto  bg-base-100 shadow lg:h-full hover:scale-125">
        <figure><img className='w-96 h-64 object-contain transform transition duration-500 hover:scale-105' src={data.image} /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
          <p className='text-red-600 font-bold'>Price : {data.price}</p>
          <div className="card-actions justify-end">
          <Rating
      style={{ maxWidth: 120 }}
      value={data.rating}
      readOnly
    />


          </div>
        </div>
      </Link>
    </div>


        



  );
};

export default Product;