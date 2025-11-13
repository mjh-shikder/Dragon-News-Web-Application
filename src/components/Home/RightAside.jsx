import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import AddZone from './AddZone';

const RightAside = () => {
    return (
        <div className='space-y-8 '>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <AddZone></AddZone>
            
        </div>
    );
};

export default RightAside;