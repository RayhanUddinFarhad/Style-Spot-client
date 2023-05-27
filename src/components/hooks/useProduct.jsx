import React, { useEffect, useState } from 'react';

const useProduct = () => {


    const [data , setData] = useState([])
    useEffect (() => {

        fetch (`https://dress-house-server.vercel.app/products`)
        .then (res => res.json())
        .then (data => setData (data))

    }, [])
   
    return [data]
};

export default useProduct;