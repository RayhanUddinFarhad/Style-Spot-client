import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const data = useLoaderData()
    return (
        <div>

            I am detailss {data.name}



            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={data.image} className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold"> {data.name}</h1>
                        <p className='text-primary my-5 font-bold'>${data.price}</p>

                        <p className="py-6"> <span className='font-bold'>{data.description}</span> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="button-primary">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;