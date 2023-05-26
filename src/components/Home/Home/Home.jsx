import React from 'react';
import Banner from './Banner/Banner';
import LatestProducts from './Latest/LatestProducts';
import OrderOnline from './OrderOnline';
import Trending from './Trending';
import Promotions from './Promotions';

const Home = () => {
    return (
        <div className='space-y-20'>

            <Banner></Banner>
            <OrderOnline></OrderOnline>

            <Trending></Trending>

            <Promotions></Promotions>


            <LatestProducts></LatestProducts>

        </div>
    );
};

export default Home;