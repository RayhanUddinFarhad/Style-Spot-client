import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import trendanim from '../../../../src/assets/anim/trends.json'
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
import { FaArrowRight } from "react-icons/fa";


import { FcFlashOn } from "react-icons/fc";
import useProduct from '../../hooks/useProduct';
import Product from '../../shared/Product';
import { Link } from 'react-router-dom';


const Trending = () => {

    const [data] = useProduct()


    const trending = data.filter(data => data.onTrending === true)
    return (
        <div>


            <div className='flex justify-between mx-10 '>

                <div className='flex items-center '>

                    <h1 className='text-4xl font-bold'> <FcFlashOn></FcFlashOn>
                    </h1>
                    <p className='text-red-600 text-4xl'>Trending</p>
                </div>


                <div>



                    <Link to="collections" className='text-primary font-bold border-b-2 border-blue-950 flex items-center'>See All <FaArrowRight></FaArrowRight></Link>
                </div>


            </div>



            <div className='grid lg:grid-cols-3 gap-5 my-10'>


                {

                    trending && trending.map(data => <Product key={data._id} data={data}></Product>)
                }


            </div>

        </div>

    );
};

export default Trending;