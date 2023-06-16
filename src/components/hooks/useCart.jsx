import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query'
import { getStoredCart } from '../../utilis/fakeDb';

const useCart = () => {
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([]); 

    const token = localStorage.getItem ('access-Token');


    
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      const productsResponse = await fetch(`https://dress-house-server.vercel.app/products`, 

      {
        headers : {
          authorization : `bearer ${token}`
        }
      }
      );

      
      const products = await productsResponse.json();

      const storedCart = getStoredCart();

      let newArray = [];

      let personTotal = 0;

      for (const id in storedCart) {
        const getProduct = products.find((product) => product._id === id);

        if (getProduct) {
          getProduct.quantity = storedCart[id];
          personTotal = getProduct.quantity * getProduct.price;
          getProduct.totalPrice = personTotal;

          newArray.push(getProduct);
        }
      }

      setCart(newArray); 

      return  newArray;
    },
  });

  return [carts, refetch, setCart];



};

export default useCart;