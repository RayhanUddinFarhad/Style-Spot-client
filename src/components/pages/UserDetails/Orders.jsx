import React from 'react';
import CartItem from '../../shared/CartItem';
import OrderCart from './OrderCart';

const Orders = ({data}) => {

    console.log(data);
    return (
        <div>


            {
                data && data.body.cart.map (cart => <OrderCart data = {cart}></OrderCart>)

            }
            
        </div>
    );
};

export default Orders;