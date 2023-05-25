import React from 'react';
import img1 from '../../assets/images/cardcolor.png'

const SectionTopbanner = ({subHeading , heading}) => {
    return (
        <div className='text-center mx-auto my-10'>

            <p className='text-sm text-blue-800'>{subHeading}</p>
            <p className='text-3xl font-bold text-primary'>{heading}</p>
            <img className='mx-auto' src= {img1} alt="" />



            
        </div>
    );
};

export default SectionTopbanner;