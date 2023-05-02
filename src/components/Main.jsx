import React from 'react';
import Header from './Shard/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Shard/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;