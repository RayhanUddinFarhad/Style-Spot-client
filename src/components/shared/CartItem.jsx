import React from 'react';

const CartItem = ({data}) => {



    const {_id, image, name, price, quantity, totalPrice} = data;
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
        <td>{quantity}</td>
        <td  className='text-primary font-bold'>${totalPrice}</td>
        
      </tr>
    );
};

export default CartItem;