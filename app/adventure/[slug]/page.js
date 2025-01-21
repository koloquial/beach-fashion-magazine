'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';

const fetchAdventureBySlug = async (slug) => {

  try {
    const response = await fetch(`http://localhost:5000/adventure/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const article = await response.json();
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

const AdventuresPage = ({ params }) => {
  const resolvedParams = use(params); 
  const { slug } = resolvedParams;

  const [adventure, setAdventure] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentChapter, setCurrentChapter] = useState(null)

    const handleChoice = (nextId) => {
      const nextChapter = adventure.chapters.find((chapter) => chapter.id === nextId);
      setCurrentChapter(nextChapter);
    };

  useEffect(() => {
    const fetchData = async () => {
      const resolvedAdventure = await fetchAdventureBySlug(slug);
      setAdventure(resolvedAdventure);
      setCurrentChapter(resolvedAdventure.chapters.find((chapter) => chapter.id === "1"))
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading>Loading adventure article</Loading>;
  }

  if (!adventure) {
    return <p>Adventure article not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='article-container'>

        <p className='title'>BEACH FASHION MAGAZINE</p>
        <div className='author-grid'>
            <div className='profile-container'>
              <img src={`http://localhost:5000/images/authors/${adventure.author.toLowerCase().replace(/\s+/g, '-')}.webp`} />
            </div>
            
            <div className='attribution'>
              <p className='small-text'>Written by</p>
              
              <Link href={`/authors/${adventure.author.toLowerCase().replace(/\s+/g, '-')}`}>
                {adventure.author}
              </Link>
            </div>
          </div>
         
        

      <div className='content-section'>
      <h2>{adventure.title}</h2>
      <p className='small-text'>{adventure.date}</p>
        <div className='text-content'>
        {console.log(currentChapter)}
          {currentChapter.id === "1" && <p><img className='article-image-1' src={`http://localhost:5000${adventure.images[0]}`} />{adventure.introduction}</p>}

          <h2>{currentChapter.headline}</h2>
          <img className='article-image-2' src={`http://localhost:5000${currentChapter.image}`} />
        <p>{currentChapter.body}</p>
        {currentChapter.choices && (
          <div>
            <h3>What will you do?</h3>
            {currentChapter.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice.next)}
                
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
        {currentChapter.ending && (
          <div>
            <h3>The End</h3>
            <p>{currentChapter.ending}</p>
          </div>
        )}
      </div>
        
      </div>
    </div>
    </div>
   
  );
};

export default AdventuresPage;
