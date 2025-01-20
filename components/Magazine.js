import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'; // Add swipe functionality

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

import Article from '@/components/Article';
import Quiz from './Quiz';
import Story from './Story';
import Interview from './Interview';
import Gossip from './Gossip';
import Author from './Author';
import Horoscope from './Horoscope';
import Rumor from './Rumor';
import Romance from './Romance';
import Feud from './Feud';
import Album from './Album';
import Movie from './Movie';
import Love from './Love';
import Adventure from './Adventure';

import secretsOfTheTwilightTides from '@/articles/2025/January/secrets-of-the-twilight-tides.json';
import whatsYourBeachVibe from '@/articles/2025/January/whats-your-beach-vibe.json';
import horoscopeData from '@/articles/2025/January/horoscope.json'
import glowUp from '@/articles/2025/January/glow-up.json'
import juicy from '@/articles/2025/January/juicy.json'
import moonlit from '@/articles/2025/January/moonlit-message.json'

import waves from '@/articles/2025/January/waves-of-whispers.json'
import summer from '@/articles/2025/January/summer-love.json'
import neon from '@/articles/2025/January/neon-or-neutral.json'
import whisper from '@/articles/2025/January/whisper.json'

import splash from '@/articles/2025/January/splash.json'
import dreams from '@/articles/2025/January/dreams-on.json'

import coco from '@/articles/2025/January/authors/coco-lune.json'
import daisy from '@/articles/2025/January/authors/daisy-driftwood.json'
import kiki from '@/articles/2025/January/authors/kiki-seabreeze.json'
import mia from '@/articles/2025/January/authors/mia-blossom.json'
import poppy from '@/articles/2025/January/authors/poppy-palmtree.json'
import sunny from '@/articles/2025/January/authors/sunny-starlette.json'
import misty from '@/articles/2025/January/authors/misty-shoreline.json'


const FullPageWebDesign = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const sections = [
    {
      id: 1,
      content: (
        <section className="section">
          <h1>BEACH FASHION MAGAZINE</h1>
          <video className="background-video" autoPlay muted loop>
            <source src="/videos/january_2025_1.mp4" type="video/mp4" />
          </video>
        </section>
      ),
    },
    {
        id: 2,
        content: (
          <section className="section section-2">
            <Article article={secretsOfTheTwilightTides} />
            <Author author={misty} />
          </section>
        ),
      },
      {
        id: 3,
        content: (
          <section className="section section-3">
            <Horoscope data={horoscopeData} />
            <Author author={daisy} />
          </section>
        ),
      },
      {
        id: 4,
        content: (
          <section className="section section-4">
            <Interview article={glowUp} />
            <Author author={sunny} />
          </section>
        ),
      },
      {
        id: 5,
        content: (
          <section className="section section-5">
            <Story article={moonlit} />
            <Author author={coco} />
          </section>
        ),
      },
      {
        id: 6,
        content: (
          <section className="section section-6">
            <Rumor article={waves} />
          </section>
        ),
      },
      {
        id: 7,
        content: (
          <section className="section section-7">
            <Quiz quizData={whatsYourBeachVibe} />
            <Author author={poppy} />
          </section>
        ),
      },
      {
        id: 8,
        content: (
          <section className="section section-8">
            <Album article={dreams} />
            <Author author={kiki} />
          </section>
        ),
      },
      {
        id: 9,
        content: (
          <section className="section section-9">
            <Movie article={splash} />
            <Author author={mia} />
          </section>
        ),
      },
      {
        id: 10,
        content: (
          <section className="section section-10">
            <Gossip article={juicy} />
          </section>
        ),
      },
      {
        id: 11,
        content: (
          <section className="section section-11">
            <Love article={summer} />
          </section>
        ),
      },
      {
        id: 12,
        content: (
          <section className="section section-12">
            <Feud article={neon} />
          </section>
        ),
      },
      {
        id: 13,
        content: (
          <section className="section section-13">
            <Adventure story={whisper} />
          </section>
        ),
      },
  ];

  const nextSection = () => {
    setCurrentPage((prev) => Math.min(prev + 1, sections.length - 1));
  };

  const prevSection = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  // Swipe handler for touch navigation
  const handlers = useSwipeable({
    onSwipedUp: nextSection,
    onSwipedDown: prevSection,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="fullpage-container" {...handlers}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`fullpage ${index === currentPage ? 'active' : 'hidden'}`}
          style={{ transform: `translateY(${(index - currentPage) * 100}%)` }}
        >
          {section.content}
        </div>
      ))}
      <div className="carousel">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FullPageWebDesign;
