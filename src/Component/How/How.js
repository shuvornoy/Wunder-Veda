import React from 'react';
import Banner from '../Pages/Howwe/Banner/Banner';
import Instagram from '../Pages/Home/Instagram/Instagram';
import Behind from '../Pages/Howwe/Behind/Behind';
import Process from '../Pages/Howwe/Process/Process';



const How = () => {
    return (
        <div className='mt-[102px]'>
            <Banner />
             <Process />
           <Behind />
        </div>
    );
};

export default How;