import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilis/fakeDb';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {


  const [cart, setCart] = useState([])
  const products = useLoaderData()



  useEffect (() =>  {


  const storedCart = getStoredCart()

  let newArray = []


  let personTotal = 0

  for (const id in storedCart) {

    const getProduct = products.find  (product => product._id === id)

    if (getProduct) {

      getProduct.quantity = storedCart[id]
      personTotal = getProduct.quantity*getProduct.price;
      getProduct.totalPrice = personTotal

      newArray.push(getProduct)
    }

    console.log(newArray);




   }

   setCart (newArray)
  }, [])


  let total = 0
  if (cart.length > 0) {
    for (const product of cart) {
      total = total + product.price * product.quantity
    }
  }




  
  
  





  return (
    <div>
      
    </div>
  );
};

export default Cart;
