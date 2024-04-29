import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
        </div>
    );
};

export default HomePage;