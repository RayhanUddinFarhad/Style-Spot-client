import React from 'react';
import { addToDb, decreaseQuantity, removeFromDb } from '../../utilis/fakeDb';
import { FaMinus, FaMinusCircle, FaPlus, FaPlusCircle } from 'react-icons/fa';


const CartItem = ({ data, handleQuantityChange }) => {
  
  const { _id, image, name, price, quantity, totalPrice } = data;

  const handleIncrease = (id) => {
    addToDb(id);
    handleQuantityChange(id, quantity + 1);
  };

  const handleDecrease = (id) => {
    if (quantity > 0) { 

        decreaseQuantity(id);
    handleQuantityChange(id, quantity - 1);
     }

     
  };


  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-[83px]">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className='text-primary font-bold'>
        ${price}
      </td>
      <td className='flex items-center space-x-2'>
        <button onClick={() => handleIncrease(_id)} className=''><FaPlusCircle></FaPlusCircle></button>
        <button className='font-bold'>{quantity}</button>
        <button onClick={() => handleDecrease(_id)} className=''> <FaMinusCircle></FaMinusCircle></button>
      </td>
      <td className='text-primary font-bold'>${totalPrice.toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
