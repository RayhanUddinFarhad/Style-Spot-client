import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteShoppingCart, getStoredCart } from '../../../utilis/fakeDb';
import { key } from 'localforage';
import CheckOutItem from './CheckOutItem';
import CartRightSide from '../Cart/CartRightSide';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useCart from '../../hooks/useCart';

const CheckOut = () => {

    const { register, handleSubmit, watch,   formState: { errors } } = useForm();
    const [value, setValue] = useState(null)
    const navigate = useNavigate()
    const [cart, refetch] = useCart()



    const onSubmit = data => {

        
        setValue(data);
        
        
    };

    console.log(value);
  


    const { user } = useContext(AuthContext)





    const handleCartPost = () => {


        const sendingData = {

            cart, value, email : value.email,
        }

       if (!value) {

        toast (' Pleae enter field your address')
       }
      else {


        fetch (`http://localhost:3000/carts/`, {

        method : 'POST',

        headers : { 'Content-Type': 'application/json' },

        body : JSON.stringify(sendingData)





    })
    .then (res => res.json())
    .then (data => {console.log (data)

        if (data.insertedId) {

            deleteShoppingCart()
            refetch ()

            navigate (`/orderDetails`)

            
        }
    
    
    })

      }


       
       }


   
    let total = 0
    if (cart.length > 0) {
        for (const product of cart) {
            total = total + product.price * product.quantity
        }
    }
    const tax = total * 7 / 100;
    const grandTotal = tax + total





    return (
        <div >
            <div className='grid lg:grid-cols-3 mx-2'>


                <form onBlur={handleSubmit(onSubmit)}  className='col-span-2'>


                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", watch)}  defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full " />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">House No</span>
                        </label>
                        <input {...register("House No")} type="text" placeholder="Address" className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Street</span>
                        </label>
                        <input  {...register("street")} type="text" placeholder="Street" className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input {...register("address")} type="text" placeholder="Address" required className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">ZIP  code</span>
                        </label>
                        <input {...register("Zip")} type="text" placeholder="ZIP" className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input {...register("phone")} type="text" placeholder="Phone" required className="input input-bordered w-full max-w-lg" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email")} value={user?.email}   type="text" placeholder="Email" className="input input-bordered w-full max-w-lg" />

                    </div>
                </form>


                <div>


                    {

                        cart && cart.map(data => <CheckOutItem key={data._id} data={data}></CheckOutItem>)
                    }


                    <div className='text-center shadow-lg p-5'>



                        <h1 className='text-primary text-lg font-bold'>Cart Totals</h1>


                        <div className='card space-y-10 font-bold'>


                            <div className='flex justify-around'>

                                <h1 className='text-primary text-lg'>SubTotals</h1>

                                <h1 className='text-primary text-lg'>${total.toFixed(2)}</h1>



                            </div>

                            <div className='flex justify-around'>

                                <h1 className='text-primary text-lg'>Totals</h1>

                                <h1 className='text-primary text-lg'>${grandTotal.toFixed(2)}</h1>



                            </div>
                            <p>Shipping & taxes calculated at checkout</p>


                            <button onClick={handleCartPost}  className={`button-primary`}>Order Now</button>




                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default CheckOut;