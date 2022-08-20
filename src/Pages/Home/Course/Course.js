import React from 'react';

const Course = ({ course }) => {
    const { name, price, description, img } = course;

    return (
        <div>

            <div className="card bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-3xl text-lime-700">{name}</h2>
                    <p className='font-bold'>{description}</p>
                    <div className="card-actions">
                        <h2 className='text-2xl font-bold my-5 text-lime-700'>Price: {price}</h2><button className="btn bg-primary text-red-700 mx-2 my-3">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;