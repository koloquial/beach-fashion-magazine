import Link from "next/link";
import coco from "@/authors/coco-lune.json";
import daisy from  "@/authors/daisy-driftwood.json";
import kiki from  "@/authors/kiki-seabreeze.json";
import mia from '@/authors/mia-blossom.json'
import misty from '@/authors/misty-shoreline.json'
import poppy from '@/authors/poppy-palmtree.json'
import sunny from '@/authors/sunny-starlette.json'
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
import horoscopeData from '@/articles/2025/January/horoscope.json';
import glowUp from '@/articles/2025/January/glow-up.json';
import juicy from '@/articles/2025/January/juicy.json';
import moonlit from '@/articles/2025/January/moonlit-message.json';

import waves from '@/articles/2025/January/waves-of-whispers.json';
import summer from '@/articles/2025/January/summer-love.json';
import neon from '@/articles/2025/January/neon-or-neutral.json';
import whisper from '@/articles/2025/January/whisper.json';

import splash from '@/articles/2025/January/splash.json';
import dreams from '@/articles/2025/January/dreams-on.json';
import {useState } from 'react'
const authors = [
    { id: 1, name: "Coco Lune", data: coco },
    { id: 2, name: "Daisy Driftwood", data: daisy },
    { id: 3, name: "Kiki Seabreeze", data: kiki },
    { id: 4, name: "Mia Blossom", data: mia },
    { id: 5, name: "Poppy Palmtree", data: poppy },
    { id: 6, name: "Sunny Starlette", data: sunny },
    { id: 7, name: "Misty Shoreline", data: misty },
  ];

  const articles = [
    { id: 1, title: "Secrets of the Twilight Tides", component: <Article article={secretsOfTheTwilightTides} />, author: misty },
    { id: 2, title: "Your January Horoscope", component: <Horoscope data={horoscopeData} />, author: daisy },
    { id: 3, title: "Glow Up: Interview with Layla Pearl", component: <Interview article={glowUp} />, author: sunny },
    { id: 4, title: "The Moonlit Message", component: <Story article={moonlit} />, author: coco },
    { id: 5, title: "Waves of Whispers", component: <Rumor article={waves} />, author: misty },
    { id: 6, title: "Beach Vibes Quiz", component: <Quiz quizData={whatsYourBeachVibe} />, author: poppy },
    { id: 7, title: "Dreams on the Horizon: Album Review", component: <Album article={dreams} />, author: kiki },
    { id: 8, title: "Splash into Drama: Movie Review", component: <Movie article={splash} />, author: mia },
    { id: 9, title: "Juicy Gossip: Behind the Scenes", component: <Gossip article={juicy} />, author: sunny },
    { id: 10, title: "Summer Love Triangle", component: <Love article={summer} />, author: coco },
    { id: 11, title: "Neon vs Neutral Feud", component: <Feud article={neon} />, author: poppy },
    { id: 12, title: "Whispered Adventures", component: <Adventure story={whisper} />, author: daisy },
  ];

  const CardDesign = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
  
    return (
      <div className="container">
        {selectedArticle === null && selectedAuthor === null && <h1>BEACH FASHION MAGAZINE</h1>}
        <video className="background-video" autoPlay muted loop>
        <source src="/videos/january_2025_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        {!selectedArticle && !selectedAuthor && (
          <>
            <div className="grid">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="card"
                  onClick={() => setSelectedArticle(article)}
                >
                  <h3>{article.title}</h3>
                  <p>By {article.author.name}</p>
                </div>
              ))}
            </div>
            <div className="authors">
              <h2>Meet the Authors</h2>
              <div className="author-list">
                {authors.map((author) => (
                    <Link href={`/authors/${author.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div
                    key={author.id}
                    className="author-card"
                    
                  >
                    <p>{author.name}</p>
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
        {selectedArticle && (
          <div className="article-view">
            <button
              className="back-button"
              onClick={() => setSelectedArticle(null)}
            >
              Back to All Articles
            </button>
            <h2>{selectedArticle.title}</h2>
            <div>{selectedArticle.component}</div>
          </div>
        )}
        {selectedAuthor && (
          <div className="author-view">

          
              <Author author={selectedAuthor.data} />
         
          </div>
        )}
      </div>
    );
  };
  
  export default CardDesign;
  