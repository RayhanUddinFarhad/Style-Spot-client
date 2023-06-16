import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Orders from './Orders';
import OrderCart from './OrderCart';

const UserOrder = () => {


    const { user } = useContext(AuthContext)

    const [data, setData] = useState([])


    useEffect(() => {


        fetch(`https://dress-house-server.vercel.app/carts/${user?.email}`)
            .then(response => response.json())
            .then(data => setData(data))
    }, [])








    return (
        <div>

            <h1 className='text-4xl font-bold text-center'>Hello <span className='text-red-500'>{user?.displayName}</span> Here is your On processing Orders,</h1>




            <div>


                <div className="overflow-x-auto">
                    <table className="table tabl-sm">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>


                                </th>
                                <th>Product Info</th>
                                <th>Price</th>
                                <th>status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}



                            {
                                data && data.map(data => <Orders data={data}></Orders>)}

                            {/* row 2 */}
                        </tbody>

                    </table>
                </div>

                {/* {

                data && data.map (data => <Orders key={data._id} data = {data.body}></Orders> )



               } */}





            </div>

        </div>
    );
};

export default UserOrder;