'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '../styles.css';

const backgrounds = [
  '/backgrounds/bg1.webp',
  '/backgrounds/bg2.webp',
  '/backgrounds/bg3.webp',
  '/backgrounds/bg4.webp',
  '/backgrounds/bg5.webp',
  '/backgrounds/bg6.webp',
  '/backgrounds/bg7.webp',
  '/backgrounds/bg8.webp',
  '/backgrounds/bg9.webp',
  '/backgrounds/bg10.webp',
  '/backgrounds/bg11.webp',
  '/backgrounds/bg12.webp',
  '/backgrounds/bg13.webp',
  '/backgrounds/bg14.webp',
];

export default function Home() {
  const [fadeIndex, setFadeIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setFadeIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setTransitioning(false);
      }, 1000); // Match the CSS transition duration
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Beach Fashion Magazine</title>
        <meta name="description" content="Official website for Beach Fashion Magazine." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="sub-container">
          <h1
            className="title-small"
            style={{
              backgroundImage: `url(${backgrounds[fadeIndex]})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            BEACH FASHION MAGAZINE
          </h1>
          <p>Select an album.</p>
        
        <div className='navigation'>
          <button>MUSIC</button>
          <button>CALENDAR</button>
          <button>MAGAZINE</button>
        </div>
      </div>
    </>
  );
}
