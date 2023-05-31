import React from 'react';
import useProduct from '../../hooks/useProduct';
import { FcFlashOn } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Product from '../../shared/Product';
import { FaArrowRight } from 'react-icons/fa';
import Loader from '../../../animation/Loader';

const Featured = () => {
    const [data, loader] = useProduct()


    const featured = data.filter(data => data.featured === true)
    return (
        <div>


            <div className='flex justify-between mx-10 '>

                <div className='flex items-center '>

                    <h1 className='text-4xl font-bold'> <FcFlashOn></FcFlashOn>
                    </h1>
                    <p className='text-red-600 text-4xl'>Featured</p>
                </div>


                <div>



                    <Link to="collections" className='text-primary font-bold border-b-2 border-blue-950 flex items-center'>See All <FaArrowRight></FaArrowRight></Link>
                </div>


            </div>

            {

                loader && <Loader></Loader>
            }

            



            <div className='grid lg:grid-cols-3  gap-5 my-10'>


                {

                    featured && featured.map(data => <Product key={data._id} data={data}></Product>)
                }


            </div>

        </div>

    );
};

export default Featured;