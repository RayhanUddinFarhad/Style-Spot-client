import React from 'react';
import { addToDb, decreaseQuantity, removeFromDb } from '../../utilis/fakeDb';
import { FaCross, FaMinus, FaMinusCircle, FaPlus, FaPlusCircle, FaTrash } from 'react-icons/fa';
import cross from '../../assets/images/cross.png'
import useCart from '../hooks/useCart';
import Swal from 'sweetalert2';


const CartItem = ({ data, handleQuantityChange }) => {

  const { _id, image, name, price, quantity, totalPrice } = data;
  const [, refetch] = useCart()

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

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromDb (id)

    refetch()


        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      }
    })
    
    



  }


  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar relative">
            <div className=" w-24">
              <img src={image} alt="Avatar " />


            </div>
            
          </div>
        </div>
      </td>
      <td className='text-primary font-bold'>
        ${price}
      </td>
      <td className=' space-x-2'>
        <button onClick={() => handleIncrease(_id)} className=''><FaPlusCircle></FaPlusCircle></button>
        <button className='font-bold'>{quantity}</button>
        <button onClick={() => handleDecrease(_id)} className=''> <FaMinusCircle></FaMinusCircle></button>
      </td>
      <td className='text-primary font-bold'>${totalPrice.toFixed(2)}</td>
      <td><FaTrash onClick={() => handleDelete (_id)} className='text-red-500 cursor-pointer'></FaTrash></td>
    </tr>
  );
};

export default CartItem;
