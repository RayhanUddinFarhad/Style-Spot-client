import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getStoredCart } from '../../../utilis/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../../shared/CartItem';
import CarttTable from './CarttTable';
import CartRightSide from './CartRightSide';
import { FaArrowRight } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Cart = () => {


  // const [cart, setCart] = useState([])

  const [cart, refetch] = useCart()
  const products = useLoaderData()
  console.log(cart);



  // useEffect(() => {


  //   const storedCart = getStoredCart()

  //   let newArray = []


  //   let personTotal = 0

  //   for (const id in storedCart) {

  //     const getProduct = products.find(product => product._id === id)

  //     if (getProduct) {

  //       getProduct.quantity = storedCart[id]
  //       personTotal = getProduct.quantity * getProduct.price;
  //       getProduct.totalPrice = personTotal

  //       newArray.push(getProduct)
  //     }





  //     console.log(newArray);




  //   }

  //   setCart(newArray)
  // }, [])


  let total = 0
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity
    }
  }
  const tax = total * 7 / 100;
  const grandTotal = tax + total


  




  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map((product) => {
      if (product._id === productId) {
        product.quantity = quantity;
        product.totalPrice = product.quantity * product.price;
      }
      return product;
    });

   refetch (updatedCart)
  };



console.log(cart);








  return (
    <div>


      {cart.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="col-span-2">
            <CarttTable cart={cart} handleQuantityChange={handleQuantityChange} refetch  = {refetch}/>
          </div>
          <CartRightSide total={total} grandTotal={grandTotal} />
        </div>
      ) : (
        <>

          <h1 className='text-4xl font-bold text-red-500 my-5'>No cart available here. </h1>
          <button><Link to="/collections" className='button-primary flex items-center'>Continue Shopping <FaArrowRight className='ml-5'></FaArrowRight></Link>
          </button>
        </>

      )}

    </div>
  );
};

export default Cart;
