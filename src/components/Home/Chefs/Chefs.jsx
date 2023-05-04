import React from 'react';
import { FaAlignLeft, FaStreetView, FaRegThumbsUp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Chefs = ({chefs}) => {
    // console.log(chefs);

    const { photo, name, experience, recipes_number, like, id } = chefs;

    return (
        <div className='border-2 border-blue-200 p-5 rounded-md'>
            <div className='bg-slate-100 p-10 rounded  shadow-lg shadow-xl'>
                <div className='text-center'>
                    <img className='mx-auto w-52 h-52 rounded-full' src={photo} alt="" />
                    <p>{name}</p>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <FaAlignLeft />
                        <p>Experience Year : {experience}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaStreetView />
                        <p>Number Of Recipes: {recipes_number}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaRegThumbsUp/>
                        <p>Like: {like}</p>
                    </div>
                </div>
                <Link to={`/viewRecipe/${id}`} className="btn btn-block my-2">View Recipes Button</Link>
            </div>
        </div>
    );
};

export default Chefs;