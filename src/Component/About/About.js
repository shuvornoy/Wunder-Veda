import React from 'react';
import AboutBanner from '../Pages/About/AboutBanner/AboutBanner';
import Rating from '../Pages/About/Rating/Rating';
import How from '../Pages/About/How/How';
import Vision from '../Pages/About/Vision/Vision';
import Meet from '../Pages/About/Meet/Meet';
import Dolor from '../Pages/About/Dolor/Dolor';
import Love from '../Pages/About/Love/Love';
import Board from '../Pages/About/Board/Board';

const About = () => {
    return (
        <div className='mt-[102px]'>
            <AboutBanner />
            <Rating />
            <How />
            <Vision />
            <Meet />
            <Love />
            <Board />
            <Dolor /> 
        </div>
    );
};

export default About;