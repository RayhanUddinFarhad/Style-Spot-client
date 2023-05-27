import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../../utilis/fakeDb';
import { key } from 'localforage';
import CheckOutItem from './CheckOutItem';
import CartRightSide from '../Cart/CartRightSide';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';

const CheckOut = () => {

    const [cart, setCart] = useState([])
    const products = useLoaderData()


    const {user} = useContext(AuthContext)


    const handleOrder = () => {

        toast.success ("Your order has been  confirmed")
     }



    useEffect(() => {


        const storedCart = getStoredCart()

        let newArray = []


        let personTotal = 0

        for (const id in storedCart) {

            const getProduct = products.find(product => product._id === id)

            if (getProduct) {

                getProduct.quantity = storedCart[id]
                personTotal = getProduct.quantity * getProduct.price;
                getProduct.totalPrice = personTotal

                newArray.push(getProduct)
            }





            console.log(newArray);




        }

        setCart(newArray)
    }, [])
    console.log(cart);



    let total = 0
    if (cart.length > 0) {
        for (const product of cart) {
            total = total + product.price * product.quantity
        }
    }
    const tax = total * 7 / 100;
    const grandTotal = tax + total




    return (
        <div>
            <div className='grid lg:grid-cols-3 mx-2'>


                    <form className='col-span-2'>


                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input disabled defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered w-full " />

                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">House No</span>
                            </label>
                            <input type="text" placeholder="Address" className="input input-bordered w-full max-w-lg" />

                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Street</span>
                            </label>
                            <input type="text" placeholder="Street" className="input input-bordered w-full max-w-lg" />

                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Address" className="input input-bordered w-full max-w-lg" />

                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">ZIP  code</span>
                            </label>
                            <input type="text" placeholder="ZIP" className="input input-bordered w-full max-w-lg" />

                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-lg" />

                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue={user?.email}  disabled type="text" placeholder="Email" className="input input-bordered w-full max-w-lg" />

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


                            <Link onSubmit={handleOrder} to='/checkOut' className='button-primary'>Order Now</Link>




                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default CheckOut;