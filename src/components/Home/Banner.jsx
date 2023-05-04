import React from 'react';
import Ban from '../../assets/31240399_7804827.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className='my-28'>
            <h2 className='text-center mt-10 text-3xl font-bold'>Welcome To Our Chef ZONE</h2>
            <div className='flex gap-20'>
                <div>
                    <img className='banner-images my-10' src={Ban} alt="" />
                </div>
                <div className='my-auto'>
                    <h2 className='text-center text-3xl font-semibold'>Our Services</h2>
                    <ul className='text-xl list-style'>
                        <li>No Delivery Charge</li>
                        <li>Home Services</li>
                        <li>Cash On Delivery</li>
                        <li>100% Authentic</li>
                        <li>Everyday Personal Chef Service</li>
                        <li>Hire a Chef For a Night</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;