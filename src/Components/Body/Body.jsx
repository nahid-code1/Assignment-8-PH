import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import HomeBody from '../HomeBody/HomeBody';

const Body = () => {
    return (
        <div className='max-w-[1600px] mx-auto inter'>
            <Navbar></Navbar>
            <Outlet>
                <HomeBody></HomeBody>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Body;