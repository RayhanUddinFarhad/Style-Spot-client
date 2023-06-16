import React from 'react';
import { FaHashtag, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OrderCart = ({ data, index }) => {

  return (


    <tr className='font-bold'>
      <th>

       



      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={data.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            {data.name}
          </div>
        </div>
      </td>
      <td>
${data.price}        <br />
        <span className="badge badge-ghost badge-sm"><FaTimes></FaTimes>{data.quantity}</span>
      </td>
      <td className='badge  badge-secondary text-white'>Pending</td>
      
    </tr>
    
  );
};

export default OrderCart;