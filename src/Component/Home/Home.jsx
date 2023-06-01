import React from 'react';
import Navbar from './../Shared/Navbar/Navbar';

import Footer from '../Shared/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';
import Shipping from '../Pages/Home/Shipping/Shipping';
import About from '../Pages/Home/About/About';
import Nutrition from '../Pages/Home/Nutrition/Nutrition';
import Instagram from '../Pages/Home/Instagram/Instagram';
import Achievements from '../Pages/Home/Achievements/Achievements';
import Review from '../Pages/Home/Review/Review';
import ProductUsp from '../Pages/Home/ProductUsp/ProductUsp';
import Experts from '../Pages/Home/Experts/Experts';


const Home = () => {
    return (
        <div>
         
            <Banner />
            <Shipping />
            <About />
            <Nutrition />
            <ProductUsp />
            <Experts />
            <Review />
            <Achievements />
            <Instagram /> 
        </div>
    );
};

export default Home;