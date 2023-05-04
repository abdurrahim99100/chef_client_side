import React from 'react';
import Banner from './Banner';
import Chef from './Chef';
import Export from './Export';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <Chef></Chef>
            <Banner></Banner>
            <Export></Export>
        </div>
    );
};

export default Home;