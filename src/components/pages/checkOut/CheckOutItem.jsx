import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOutItem = ({data}) => {


    const {user} = useContext(AuthContext)



   









    return (
        <div>


            <div className='flex w-[369px] justify-around items-center border-b-2 p-2'>


                <img className='w-20 object-cover' src= {data.image} alt="" />

                <div>
                    <h3 className='font-bold text-primary'>{data.name}</h3>

                    <p>X{data.quantity}</p>



                </div>

                <div>

                    <p className='font-bold text-primary'>{data.totalPrice}</p>


                </div>
            </div>



            
            
        </div>
    );
};

export default CheckOutItem;