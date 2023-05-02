import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar bg-base-300">
            <div className='container mx-auto flex justify-between'>
                <div>
                    <h2 className='font-bold text-xl'>Chefs ZONE</h2>
                </div>
                <div className='flex gap-8'>
                    <Link to="/home">Home</Link>
                    <Link to="">Blog</Link>
                    <Link to="">
                        Profile
                        <img src="" alt="" />
                    </Link>
                    <div>
                        <Link to="">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;