import React from 'react';
import img from '../../../assets/images/promotion3.png'

const Promotions2 = () => {
    return (
        <div className='bg-[#F1F0FF] max-h-full max-w-screen-2xl lg:flex justify-around items-center p-2'>

            <img className='h-96 ' src={img} alt="" />

            <div>

                <h1  className='text-[#151875] text-4xl font-bold'>Unique Features Of leatest & <br />
Trending Poducts</h1>


<ul className='text-[#ACABC3] space-y-5  my-5 list-disc'>


    
    <li className='marker:text-red-500'>All frames constructed with hardwood solids and laminates</li>
    <li className='marker:text-blue-800'>Reinforced with double wood dowels, glue, screw - nails corner 
blocks and machine nails</li>

<li className='marker:text-green-300'>Arms, backs and seats are structurally reinforced</li>

<button className='button-primary'>Add to cart</button>

</ul>


            </div>



            
        </div>
    );
};

export default Promotions2;