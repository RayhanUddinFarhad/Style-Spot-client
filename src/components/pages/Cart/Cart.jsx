import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getStoredCart } from '../../../utilis/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../../shared/CartItem';
import CarttTable from './CarttTable';
import CartRightSide from './CartRightSide';

const Cart = () => {


  const [cart, setCart] = useState([])
  const products = useLoaderData()



  useEffect(() => {


    const storedCart = getStoredCart()

    let newArray = []


    let personTotal = 0

    for (const id in storedCart) {

      const getProduct = products.find(product => product._id === id)

      if (getProduct) {

        getProduct.quantity = storedCart[id]
        personTotal = getProduct.quantity * getProduct.price;
        getProduct.totalPrice = personTotal

        newArray.push(getProduct)
      }


      


      console.log(newArray);




    }

    setCart(newArray)
  }, [])


  let total = 0
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity
    }
  }
  const tax = total * 7 / 100;
   const grandTotal = tax+total


  

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map((product) => {
      if (product._id === productId) {
        product.quantity = quantity;
        product.totalPrice = product.quantity * product.price;
      }
      return product;
    });

    setCart(updatedCart);
  };


  









  return (
    <div>


      <div className='grid lg:grid-cols-3 gap-5'>

       <div className='col-span-2'>


        <CarttTable cart = {cart} handleQuantityChange = {handleQuantityChange}></CarttTable>
       </div>


       <CartRightSide total = {total} grandTotal = {grandTotal}></CartRightSide>








      </div>

    </div>
  );
};

export default Cart;
