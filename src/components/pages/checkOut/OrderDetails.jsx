import React from 'react';
import animation from  '../../../assets/anim/success.json'
import Lottie from "lottie-react";
const OrderDetails = () => {
    return (
        <div className='mx-auto my-20'>



            <Lottie className = "w-96" animationData={animation} ></Lottie>
            <h1 className='text-success font-bold text-5xl'>Your Order has been completed</h1>




            
        </div>
    );
};

export default OrderDetails;