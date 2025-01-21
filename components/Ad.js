import React from 'react';

const Ad = () => {
    let random = Math.floor(Math.random() * 3);
    return <div className='ad'><img src={`http://localhost:5000/images/ads/ad${random}.webp`} /></div>
};

export default Ad;
