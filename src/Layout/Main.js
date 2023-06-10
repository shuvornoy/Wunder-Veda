import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';
import Instagram from '../Component/Pages/Home/Instagram/Instagram';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div>
            <Instagram />
            <Footer />
            </div>  
        </div>
    );
};

export default Main;