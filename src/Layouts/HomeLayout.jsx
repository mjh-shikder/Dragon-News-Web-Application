import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/Home/LeftAside';
import RightAside from '../components/Home/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {

    const { state } = useNavigate();

    return (
        <div>
            <header className='mt-10'>
                    <Header></Header>
                <section className='w-11/12 mx-auto my-3  '>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3  '>
                    <Navbar></Navbar>
                </nav>
            </header>
            {/* Main */}
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12  '>
                <aside className='col-span-2 sticky top-10 h-fit '>
                     <LeftAside></LeftAside>
                </aside>
                <section className='col-span-8 mx-5'>
                   {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} 
                </section>
                <aside className='col-span-2 sticky top-10 h-fit  '>
                     <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;