import React from 'react';
import { deleteShoppingCart } from '../../../utilis/fakeDb';
import CartItem from '../../shared/CartItem';

const CarttTable = ({ cart, handleQuantityChange }) => {
    return (
        <div>

            <div>




                <div className="overflow-x-auto w-full">
                    <table className="lg:table table-compact w-full">
                        {/* head */}
                        <thead>
                            <tr >

                                <th className='text-primary text-lg'>Products</th>
                                <th className='text-primary text-lg'>Price</th>
                                <th className='text-primary text-lg'>Quantity</th>
                                <th className='text-primary text-lg'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                cart && cart.map(data => <CartItem key={data._id} data={data} handleQuantityChange={handleQuantityChange}></CartItem>)
                            }

                        </tbody>
                        {/* foot */}




                    </table>

                    <button onClick={deleteShoppingCart} className='button-primary '>Clear Cart</button>

                </div>



            </div>

        </div>
    );
};

export default CarttTable;