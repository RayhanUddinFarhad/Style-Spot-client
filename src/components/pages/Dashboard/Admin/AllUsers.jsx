import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import { FaTrash, FaUserSecret } from 'react-icons/fa';

const AllUsers = () => {

    const {data : user = [], refetch } = useQuery (['users'], async  () => {

        const res = await fetch (`http://localhost:3000/users`)
        return res.json()



    })



    const handleMadeAdmin = (user) => {



        fetch  (`http://localhost:3000/users/${user._id}`, {

        method : 'PATCH'
        })
        .then (res => res.json())
        .then (data => {console.log(data)
        
        
        refetch()})



     }









    return (
        <div>

            Here is All user



            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {

        user && user.map ((user, index) => {


            return (<tr className="bg-base-200">
            <th>{index +1}</th>
            <td>{user?.displayName}</td>
            <td>{user.email}</td>
            <td onClick={() => handleMadeAdmin (user) }>{ user.role ? "admin" : "user"
        }</td>
            <td><FaTrash className='cursor-pointer'></FaTrash></td>
          </tr>)
        })
      }
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUsers;