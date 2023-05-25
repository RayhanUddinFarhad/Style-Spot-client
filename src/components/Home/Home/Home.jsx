import React from 'react';
import Banner from './Banner/Banner';
import LatestProducts from './Latest/LatestProducts';
import OrderOnline from './OrderOnline';

const Home = () => {
    return (
        <div className='space-y-20'>

            <Banner></Banner>
            <div className='container mx-auto'>
            <OrderOnline></OrderOnline>


            <LatestProducts></LatestProducts>

            </div>
        </div>
    );
};

export default Home;