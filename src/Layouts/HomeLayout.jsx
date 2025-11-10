import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header className='mt-10'>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3  '>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <main>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;