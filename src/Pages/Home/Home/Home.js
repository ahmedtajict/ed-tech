import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Courses from '../Courses/Courses';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>

            <Footer></Footer>
        </div>
    );
};

export default Home;