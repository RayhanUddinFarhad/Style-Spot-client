import React from 'react';
import { Link } from 'react-router-dom';

const CartRightSide = ({total, grandTotal}) => {
    return (
        <div>


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


  <Link to = '/checkOut' className='button-primary'>Proceed To Checkout</Link>




</div>
</div>

            
        </div>
    );
};

export default CartRightSide;