import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Orders from './Orders';

const UserOrder = () => {


    const {user} = useContext (AuthContext)

    const [data, setData] = useState([])


    useEffect (() => { 


        fetch (`http://localhost:3000/carts/${user?.email}`)
        .then (response => response.json())
        .then (data => setData (data))
    }, [])
console.log(data);

    






    return (
        <div>

            <h1 className='text-4xl font-bold text-center'>Hello <span className='text-red-500'>{user?.displayName}</span> Here is your On processing Orders,</h1>




            <div>

               {

                data && data.map (data => <Orders key={data._id} data = {data}></Orders> )



               }





            </div>
            
        </div>
    );
};

export default UserOrder;