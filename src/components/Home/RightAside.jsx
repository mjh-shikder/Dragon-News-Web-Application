import React, { useContext } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import AddZone from './AddZone';
import { AuthContext } from '../../Context/AuthProvider';

const RightAside = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className='space-y-8 '>
            {
                user? '':<SocialLogin></SocialLogin>
            }
            
            <FindUs></FindUs>
            <Qzone></Qzone>
            <AddZone></AddZone>
            
        </div>
    );
};

export default RightAside;