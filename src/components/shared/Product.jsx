import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Product = ({data}) => {
    return (


      <Link to={`/details/${data._id}`}>      <div className='transform transition duration-500 hover:scale-105'>
      <div data-aos="fade-up"     data-aos-duration="1000"
className="card w-96 bg-base-100 shadow-lg h-full hover:scale-50">
<figure><img className='w-96 h-64 object-contain' src= {data.image}  /></figure>
<div className="card-body">
<h2 className="card-title">{data.name}</h2>
<p>{data.description}</p>
<p className='text-red-600 font-bold'>Price : {data.price}</p>
<div className="card-actions justify-end">


</div>
</div>
</div>
  </div>
</Link>
        
    );
};

export default Product;