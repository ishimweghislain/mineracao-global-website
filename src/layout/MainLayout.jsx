import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MobileBottomNav from '../components/MobileBottomNav';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pb-20 md:pb-0">
                <Outlet />
            </main>
            <MobileBottomNav />
            <Footer />
        </div>
    );
};

export default MainLayout;
