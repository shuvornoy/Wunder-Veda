import React from 'react';
import Instagram from '../Pages/Home/Instagram/Instagram';
import WhyYou from '../Pages/Ingredients/WhyYou/WhyYou';
import Banner from '../Pages/Ingredients/Banner/Banner';
import Explore from './../Pages/Ingredients/Explore/Explore';


const Ingredients = () => {
    return (
        <div>
            <Banner />
            <Explore />
            {/* <ExpertsBehind /> */}
            <WhyYou />
            <Instagram /> 
        </div>
    );
};

export default Ingredients;