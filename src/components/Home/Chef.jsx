import React, { useEffect, useState } from 'react';
import Chefs from './Chefs/Chefs';

const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://chef-server-side-cornollc.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))


    }, []);


    return (
        <div>
            <h2 className='
            text-center text-5xl font-semibold 
            first-letter: text-gray-500 py-3 
            rounded-3xl'>WE ARE ALL CHEF</h2>
            <div className='grid gap-10 grid-cols-2 my-20'>
                {
                    chef.map(chefs => <Chefs
                        key={chefs.id}
                        chefs={chefs}
                    ></Chefs>)
                }
            </div>
        </div>
    );
};

export default Chef;