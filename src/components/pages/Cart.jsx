import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getStoredCart } from '../../utilis/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../shared/CartItem';

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




        <div className="overflow-x-auto w-full">
  <table className="lg:table table-compact w-full">
    {/* head */}
    <thead>
      <tr >
        
        <th className='text-primary text-lg'>Products</th>
        <th className='text-primary text-lg'>Price</th>
        <th  className='text-primary text-lg'>Quantity</th>
        <th className='text-primary text-lg'>Total</th>
      </tr>
    </thead>
    <tbody>
    {

      cart && cart.map (data => <CartItem key = {data._id} data = {data} handleQuantityChange= {handleQuantityChange}></CartItem>)
    }
     
    </tbody>
    {/* foot */}


    
    
  </table>

  <button onClick={deleteShoppingCart} className='button-primary '>Clear Cart</button>

</div>



        </div>


        <div className='text-center shadow-lg p-5'>



          <h1 className='text-primary text-lg font-bold'>Cart Totals</h1>


          <div className='card space-y-10 font-bold'>


            <div className='flex justify-around'>

              <h1 className='text-primary text-lg'>SubTotals</h1>

              <h1 className='text-primary text-lg'>${total.toFixed(2)}</h1>



            </div>

            <div className='flex justify-around'>

              <h1 className='text-primary text-lg'>Totals</h1>

              <h1 className='text-primary text-lg'>${grandTotal.toFixed(2)}</h1>



            </div>
            <p>Shipping & taxes calculated at checkout</p>


            <Link to = '/checkOut' className='button-primary'>Proceed To Checkout</Link>




          </div>
        </div>









      </div>

    </div>
  );
};

export default Cart;
