import React, { useState } from 'react';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import useProduct from '../../hooks/useProduct';
import Product from '../../shared/Product';
import Loader from '../../../animation/Loader';

const Collections = () => {



    const [data, loader] = useProduct()
    const [tabIndex, setTabIndex] = useState(0);


    const men = data.filter(data => data.category === 'men')
    const women = data.filter(data => data.category === 'women')
    const child = data.filter(data => data.category === 'child')


    return (
        <div>

            <Tabs selectedTabClassName='text-red-500 font-bold  ' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='border-0 mx-auto flex justify-center mb-10 text-lg'>

                    <Tab>All Products</Tab>
                    <Tab>Men</Tab>
                    <Tab>Women</Tab>
                    <Tab>Child</Tab>
                </TabList>

                <TabPanel>
                    {

                        loader && <Loader></Loader>
                    }

                    <div className='grid lg:grid-cols-3 gap-5 '>


                        {

                            data && data.map(data => <Product key={data._id} data={data}></Product>)
                        }
                    </div>


                </TabPanel>
                <TabPanel>

                    {

                        loader && <Loader></Loader>
                    }

                    <div className='grid lg:grid-cols-3 gap-5 '>


                        {

                            men && men.map(data => <Product key={data._id} data={data}></Product>)
                        }
                    </div>


                </TabPanel>
                <TabPanel>
                    {

                        loader && <Loader></Loader>
                    }



                    <div className='grid lg:grid-cols-3 gap-5'>


                        {

                            women && women.map(data => <Product key={data._id} data={data}></Product>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {

                        loader && <Loader></Loader>
                    }


                    <div className='grid lg:grid-cols-3 gap-5'>


                        {

                            child && child.map(data => <Product key={data._id} data={data}></Product>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Collections;