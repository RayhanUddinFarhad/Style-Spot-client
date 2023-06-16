import React from 'react';
import CartItem from '../../shared/CartItem';
import OrderCart from './OrderCart';

const Orders = ({data}) => {

    console.log(data.body.cart);
    return (
        <>







            {
                data?.body.cart && data?.body?.cart.map ((cart, index) => <OrderCart index = {index } data = {cart}></OrderCart>)

            }
            
        </>
    );
};

export default Orders;