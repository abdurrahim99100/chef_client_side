import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handelLogOut = () => {
        logOut()
        .then()
        .catch(error =>console.log(error))
    }
    return (
        <nav className="navbar bg-base-300">
            <div className='container mx-auto flex justify-between'>
                <div>
                    <h2 className='font-bold text-xl'>Chefs ZONE</h2>
                </div>
                <div className='flex gap-8 text-xl'>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="">Support</Link>
                    <Link to="">Special Food</Link>
                </div>
                <div>
                    <div className='font-semibold flex gap-2'>

                        {
                            user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                        }

                        {
                            user ?
                                <button onClick={handelLogOut} variant="secondary">Logout</button> :
                                <Link to="/login">
                                    <button variant="secondary">Login</button>
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

