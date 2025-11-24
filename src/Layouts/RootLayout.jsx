import React from 'react';
import Navbar from '../assets/Components/Navbar';
import Footer from '../assets/Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <main className='min-h-[calc(100vh-285px)]'>
               
            <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;