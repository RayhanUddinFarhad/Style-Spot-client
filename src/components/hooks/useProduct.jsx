import React, { useEffect, useState } from 'react';

const useProduct = () => {


    const [data , setData] = useState([])
    useEffect (() => {

        fetch (`http://localhost:3000/products`)
        .then (res => res.json())
        .then (data => setData (data))

    }, [])
   
    return [data]
};

export default useProduct;