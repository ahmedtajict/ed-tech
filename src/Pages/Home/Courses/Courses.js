import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className=''>
            <h1 className='text-center text-5xl text-lime-700 font-bold my-8'>Courses</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    >
                    </Course>)
                }

            </div>

        </div>
    );
};

export default Courses;