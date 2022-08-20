import React from 'react';

const Course = ({ course }) => {
    const { name, price, description, img } = course;

    return (
        <div>
            <h1>this is service name: {name}</h1>
        </div>
    );
};

export default Course;