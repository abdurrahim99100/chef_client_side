import React from 'react';
import Caro1 from '../../assets/pexels-ash-376464.jpg';
import Caro2 from '../../assets/pexels-freestocksorg-226632.jpg';
import Caro3 from '../../assets/pexels-pixabay-221059.jpg';
import Caro4 from '../../assets/pexels-freestocksorg-226632.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full mt-20">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Caro1} className="w-full h-4/5 rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Caro2} className="w-full h-4/5 rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Caro3} className="w-full h-4/5 rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Caro4} className="w-full h-4/5 rounded" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;