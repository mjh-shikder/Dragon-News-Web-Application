import React from 'react';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen '>
            <header className='w-11/12 mx-auto py-10 '>
                <Navbar></Navbar>
            </header>
        </div>
    );
};

export default AuthLayout;