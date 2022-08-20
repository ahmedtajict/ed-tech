import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/CWFQzwp/student.jpg" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-6xl font-bold"><span className='text-red-700'>Start learning from</span> <br /> <span className='text-lime-700'>the world’s best institutions</span></h1>
                    <input type="text" placeholder="Type Course Name" className="input input-bordered input-primary w-full max-w-xs mt-8" />
                    <button className="btn bg-primary text-red-700 mx-2 my-3">Search</button>
                    <p className="text-3xl font-bold py-6">5000+ people are learning on Ed-Tech today</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;