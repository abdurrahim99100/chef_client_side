import React from 'react';
import Err from '../../assets/4660877_2446912.jpg';

const Error = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='my-60 text-center'>
                <h2 className='text-3xl font-semibold'>File not found</h2>
                <p className='my-1'>The site configured at this address does not contain the requested file.</p>
                <img className='w-96' src={Err} alt="" />
            </div>
        </div>
    );
};

export default Error;