import React from 'react';
import Banner from './Banner/Banner';
import LatestProducts from './Latest/LatestProducts';
import OrderOnline from './OrderOnline';
import Trending from './Trending';
import Promotions from './Promotions';
import Featured from './Featured';
import Feattures from './Features/Feattures';
import Promotions2 from './Promotions2';

const Home = () => {
    
    return (
        <div className='space-y-20'>

            <Banner></Banner>
            <OrderOnline></OrderOnline>

            <Feattures></Feattures>

            <Trending></Trending>

            <Promotions></Promotions>

            <Featured></Featured>

            <Promotions2></Promotions2>





        </div>
    );
};

export default Home;