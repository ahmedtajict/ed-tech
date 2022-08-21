import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    return (
        <div>
            <h1>welcome to details : {courseId}</h1>
        </div>
    );
};

export default CourseDetails;