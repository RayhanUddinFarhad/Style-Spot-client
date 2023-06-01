import React from 'react';
import { Link } from 'react-router-dom';

const OrderCart = ({data}) => {
    return (
        <div>
            <div class=" my-10 border ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src= {data.image} class=" w-52 rounded-lg " />
    <div className='space-y-5'>
      <h1 class="text-5xl font-bold">{data.name}</h1>
      
      <div className='flex justify-between'>

      <p className='text-xl font-bold text-red-500'>Quantity: X{data.quantity}</p>
      <p className='text-xl font-bold text-red-500'>Price : ${data.price}</p>


      </div>
      <p className='badge badge-success text-white'>On Processing</p>
      <div>
      <Link to= {`/details/${data._id}`} className='button-primary'>See Details</Link>
      </div>


     

    </div>
    
  </div>
</div>
        </div>
    );
};

export default OrderCart;