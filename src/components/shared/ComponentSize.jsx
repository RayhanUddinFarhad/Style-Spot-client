import React from 'react';

const ComponentSize = ({children}) => {
    return (
        <div className='max-w-screen-2xl mx-auto mb-20 mt-20 md:min-h-[calc(100vh-341px)] '>

            {children}
            
        </div>
    );
};

export default ComponentSize;