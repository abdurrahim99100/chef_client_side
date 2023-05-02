import React from 'react';
import Ban from '../../assets/31240399_7804827.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <h2 className='text-center'>Welcome To Our Chef ZONE</h2>
            <div>
                <img className='banner-images' src={Ban} alt="" />
            </div>
        </div>
    );
};

export default Banner;