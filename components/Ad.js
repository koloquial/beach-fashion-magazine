import React from 'react';

const Ad = () => {
    let random = Math.floor(Math.random() * 3);
    return <div className='ad'><img src={`${process.env.NEXT_PUBLIC_HOST_SERVER}/images/ads/ad${random}.webp`} /></div>
};

export default Ad;
