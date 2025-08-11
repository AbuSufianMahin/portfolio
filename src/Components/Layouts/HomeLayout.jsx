import React from 'react';
import HomePage from '../../Pages/HomeLayoutPages/HomePage';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const HomeLayout = () => {
    return (
        <div className='poppins-regular'>
            <Navbar></Navbar>
            <HomePage></HomePage>
        </div>
    );
};

export default HomeLayout;