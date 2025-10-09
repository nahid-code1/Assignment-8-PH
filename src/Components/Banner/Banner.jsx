import React from 'react';

const Banner = () => {
    return (
        <div className='[background:linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white flex-row justify-center items-center text-center p-20 inter'>
            <p className='text-5xl font-bold'>Trusted by Millions, Built for You</p>
            <div className="flex space-x-28 text-center justify-center mt-10">
                <div className="">
                    <p className='text-[16px]'>Total Downloads</p>
                    <p className='text-[64px] font-extrabold'>29.6M</p>
                    <p className='text-[16px]'>21% more than last month</p>
                </div>
                <div className="">
                    <p className='text-[16px]'>Total Reviews</p>
                    <p className='text-[64px] font-extrabold'>906K</p>
                    <p className='text-[16px]'>46% more than last month</p>
                </div>
                <div className="">
                    <p className='text-[16px]'>Active Apps</p>
                    <p className='text-[64px] font-extrabold'>13+</p>
                    <p className='text-[16px]'>10 more will launch</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;