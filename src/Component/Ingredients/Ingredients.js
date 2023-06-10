import React from 'react';
import WhyYou from '../Pages/Ingredients/WhyYou/WhyYou';
import Banner from '../Pages/Ingredients/Banner/Banner';
import ExpertsBehind from '../Pages/Ingredients/ExpertsBehind/ExpertsBehind/ExpertsBehind';
import Explore from '../Pages/Ingredients/Explore/Explore';



const Ingredients = () => {
    return (
        <div>
            <Banner />
            <Explore />
            <ExpertsBehind />
            <WhyYou />
        </div>
    );
};

export default Ingredients;