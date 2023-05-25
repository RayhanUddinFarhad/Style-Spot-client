import React, { useState } from 'react';
import cardcolor from '../../../../assets/images/cardcolor.png'
import SectionTopbanner from '../../../shared/sectionTopbanner';
import useProduct from '../../../hooks/useProduct';
import Product from './Product';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const LatestProducts = () => {

  const [data] = useProduct()
  const [tabIndex, setTabIndex] = useState(0);

  const onSale = data.filter(data => data.onSale === true)
  const tranding = data.filter(data => data.onTrending === true)
  const featured = data.filter(data => data.featured === true)


  console.log(onSale)




  console.log(data)
  return (
    <div>

      <SectionTopbanner heading={"Latest Products"}></SectionTopbanner>

      <div className='flex justify-center mx-auto'>

        <Tabs selectedTabClassName='button-primary' defaultValue={tabIndex} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='bottom-0 mx-auto flex justify-center my-10'>
            <Tab>On sale</Tab>
            <Tab>Trending</Tab>
            <Tab>Featured</Tab>
          </TabList>



          <TabPanel>
            <div className='grid lg:grid-cols-3 gap-5'>


              {

                onSale && onSale.map(data => <Product key={data._id} data={data}></Product>)
              }


            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid lg:grid-cols-3 gap-5'>


              {

                featured && featured.map(data => <Product key={data._id} data={data}></Product>)
              }


            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid lg:grid-cols-3 gap-5'>


              {

                tranding && tranding.map(data => <Product key={data._id} data={data}></Product>)
              }


            </div>
          </TabPanel>
        </Tabs>
      </div>

      <h1>{data.length}</h1>

      {/* <div className='grid lg:grid-cols-3 gap-5'>


        {

          data && data.map(data => <Product data={data}></Product>)
        }


      </div> */}






    </div>
  );
};

export default LatestProducts;