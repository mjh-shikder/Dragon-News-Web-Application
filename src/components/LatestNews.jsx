import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3 rounded-lg '>
            <p className='text-base-100 bg-secondary px-4 py-2 font-semibold rounded-lg text-lg '>Latest</p>
            <Marquee className='flex  gap-3.5' pauseOnHover={true} speed={100}>
            <p className='font-semibold text-lg text-gray-800'><span className='text-secondary'> Lorem ipsum </span>dolor sit amet, consectetur adipisicing elit. Hic, fuga laboriosam sed eum amet inventore commodi obcaecati provident sunt. Illo assumenda amet  </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;