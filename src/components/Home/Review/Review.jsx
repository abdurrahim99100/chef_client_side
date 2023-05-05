import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const reviewData = useLoaderData();
    const reviewDetails = reviewData.recipy;
    console.log(reviewDetails)

    const handleFav = event =>{
        event.currentTarget.disabled = true;

        toast("Favorite Added!")    
    }


    return (
        <div className='flex container mx-auto justify-between my-64'>
            {
                reviewDetails.map(recipys =>
                    <div key={recipys.id} className='border border-gray-400 p-5 m-5 shadow-lg shadow-gray-500/40 rounded'>
                        <img className='w-96 h-72 rounded' src={recipys.banner} alt="" />
                        <p className='text-2xl font-semibold'>Recipe Name: {recipys.name}</p>
                        <p className='text-xl font-semibold'>Recipe Number: {recipys.recipy_number}</p>
                        <p className='font-semibold'>experience: {recipys.exprience} (year)</p>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='font-semibold'>INGREDIENTS</h2>
                                <p>Flour, Oil, Pepper, Onion, Salt</p>
                            </div>
                            <div>
                                <button onClick={handleFav}
                                className="btn btn-primary my-2">Favorite</button>
                                <ToastContainer />
                            </div>
                        </div>

                        <Rating
                            placeholderRating={recipys.id}
                            emptySymbol={<img src="assets/images/star-grey.png" 
                            className="icon" />}
                            placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                            fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                        ></Rating>
                    </div>
                )
            }
        </div>
    );
};

export default Review;