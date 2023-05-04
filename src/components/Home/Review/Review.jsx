import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Review = () => {
    const reviewData = useLoaderData();
    const reviewDetails = reviewData.recipy;
    console.log(reviewDetails)


    return (
        <div className='flex container mx-auto justify-between my-64'>
            {
                reviewDetails.map(recipys =>
                    <div key={recipys.id} className='border border-gray-400 p-5 m-5 shadow-lg shadow-gray-500/40 rounded'>
                        <img className='w-96 h-72 rounded' src={recipys.banner} alt="" />
                        <p className='text-2xl font-semibold'>Recipe Name: {recipys.name}</p>
                        <p className='text-xl font-semibold'>Recipe Number: {recipys.recipy_number}</p>
                        <p className='font-semibold'>experience: {recipys.exprience} (year)</p>
                        <button className="btn btn-primary my-2">Favorite</button>
                    </div>
                )
            }
        </div>
    );
};

export default Review;