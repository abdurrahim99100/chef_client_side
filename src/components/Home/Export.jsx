import React, { useEffect, useState } from 'react';

const Export = () => {
    const [expo, setExpo] = useState([]);

    useEffect(() => {
        fetch('https://chef-server-side-cornollc.vercel.app/chef')
            .then(res => res.json())
            .then(data => setExpo(data))
            .catch(error => console.log(error))
    }, []);
    // console.log(expo)
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>WELCOME TO OUR FOREIGNER CHEF LIST</h2>
            <div className='grid grid-cols-3 gap-12 my-12 p-10'>
                {
                    expo.map(exports =>
                        <div className=' border border-gray-400 bg-slate-50 p-20 rounded' key={exports.id}>
                            <img className='w-40 h-40 rounded-full mx-auto' src={exports.photo} alt="" />
                            <div className='px-5'>
                                <p>Form Kingdom of Saudi Arabia</p>
                                <p className=' text-2xl'>Name: {exports.name}</p>
                                <p className='text-2xl'>experience: {exports.experience} (Year)</p>
                                <p className='text-2xl'>Like: {exports.like}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex mb-10'>
                <div className="mockup-phone border-primary">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">Hi.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Export;