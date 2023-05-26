import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../../utilis/fakeDb';

const ViewDetails = () => {
  const data = useLoaderData();


  const handleAddtoCart = (id) => {
    console.log(id);
    addToDb(id)



  }
  

  return (
    <div>
      I am details {data.name}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={data.image} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="text-primary my-5 font-bold">${data.price}</p>
            <p className="py-6">
              <span className="font-bold">{data.description}</span> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="flex my-10">
              <button  className="btn">
                +
              </button>
              <p className="button-primary">0</p>
              <button  className="btn">
                -
              </button>
            </div>
            <button onClick={() => handleAddtoCart(data._id)} className="button-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
