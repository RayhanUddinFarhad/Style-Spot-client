import React, { useEffect, useState } from 'react';

const useProduct = () => {


    const [data , setData] = useState([])
    const [loader, setLoader] = useState  (false)
    useEffect (() => {

        setLoader (true)

        fetch (`https://dress-house-server.vercel.app/products`)
        .then (res => res.json())
        .then (data => {setData (data)

            setLoader (false)

            
        
        
        })

    }, [])
   
    return [data, loader]
};

export default useProduct;