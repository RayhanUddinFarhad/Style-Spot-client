import React from 'react';

const Product = ({data}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-full">
  <figure><img className='h-96' src= {data.image}  /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.description}</p>
    <div className="card-actions justify-end">
      <button className="button-primary">See Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;