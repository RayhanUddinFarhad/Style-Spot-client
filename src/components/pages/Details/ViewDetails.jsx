import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../../utilis/fakeDb';
import { toast } from 'react-toastify';
import useProduct from '../../hooks/useProduct';
import SectionTopbanner from '../../shared/sectionTopbanner';
import Product from '../../shared/Product';
import useCart from '../../hooks/useCart';

const ViewDetails = () => {
  const product = useLoaderData();
  const [data] = useProduct()
  const [, refetch] = useCart()


  const handleAddtoCart = (id) => {
    console.log(id);
    addToDb(id)
    toast.success('Product added successfully')
    refetch()



  }

  const related = data.filter(c => c.category === product.category)
  console.log(related);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);







  return (
    <div>
      <div className="lg:flex items-center lg:space-x-10 p-10 my-20">
        <div className="lg:w-[50%]">
          <img className='object-contain h-96' src={product.image} alt="" />

        </div>

        <div>

          <div className='lg:w-[50%]'>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="text-primary my-5 font-bold">${product.price}</p>
            <p className="py-6">
              <span className="font-bold">{product.description}</span> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <button onClick={() => handleAddtoCart(product._id)} className="button-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>


      <div>

        <SectionTopbanner heading={"Related Products"}></SectionTopbanner>


        <div className='grid lg:grid-cols-3 gap-10'>

          {

            related && related.map(data => <Product key={data._id}  data={data}></Product>)


          }


        </div>

      </div>
    </div>
  );
};

export default ViewDetails;
