import React from 'react';
import { NavLink } from 'react-router';
import profileIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between my-5 items-center'>
            <div className=''></div>
            <div className='nav space-x-3 '>
                <NavLink className={'text-accent font-semibold'} to={'/'}>Home</NavLink>
                <NavLink className={'text-accent font-semibold'} to={'/about'}>About</NavLink>
                <NavLink className={'text-accent font-semibold'} to={'/career'}>Career</NavLink>
            </div>
            <div className='login-btn flex space-x-3 '>
                <img src={profileIcon} alt="" />
                <button className='btn btn-primary rounded-lg px-7 '>Login</button>
            </div>
        </div>
    );
};

export default Navbar;