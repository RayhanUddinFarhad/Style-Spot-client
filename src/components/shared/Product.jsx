import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({data}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg h-full">
  <figure><img className='w-96 h-64 object-contain' src= {data.image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.description}</p>
    <p className='text-red-600 font-bold'>Price : {data.price}</p>
    <div className="card-actions justify-end">

      <Link to={`/details/${data._id}`}>      <button className="button-primary">See Details</button>
</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;