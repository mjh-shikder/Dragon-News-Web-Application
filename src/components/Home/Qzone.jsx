import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import playgroundImg from '../../assets/playground.png'
import classImg from '../../assets/class.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 rounded-md '>
            <h2 className='font-semibold text-lg mb-5 '>Qzone </h2>
            <div className="space-y-5">
                <img src={swimmingImg} alt="" />
                <img src={playgroundImg} alt="" />
                <img src={classImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;