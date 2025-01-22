'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';
import Heading from '@/components/Heading/Heading';
import { fetchArticle } from '@/functions/fetchArticle';

const AdventuresPage = ({ params }) => {
  const resolvedParams = use(params); 
  const { slug } = resolvedParams;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentChapter, setCurrentChapter] = useState(null)

    const handleChoice = (nextId) => {
      const nextChapter = article.chapters.find((chapter) => chapter.id === nextId);
      setCurrentChapter(nextChapter);
    };

  useEffect(() => {
    const fetchData = async () => {
      const resolvedArticle = await fetchArticle('adventure', slug);
      setArticle(resolvedArticle);
      setCurrentChapter(resolvedArticle.chapters.find((chapter) => chapter.id === "1"))
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading>Loading article</Loading>;
  }

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='article-container'>

        <Heading article={adventure} />
         
      <div className='content-section'>
      <h2>{adventure.title}</h2>
      <p className='small-text'>{adventure.date}</p>
        <div className='text-content'>
        {console.log(currentChapter)}
          {currentChapter.id === "1" && <p><img className='article-image-1' src={`${process.env.NEXT_PUBLIC_HOST_SERVER}${adventure.images[0]}`} />{adventure.introduction}</p>}

          <h2>{currentChapter.headline}</h2>
          <img className='article-image-2' src={`${process.env.NEXT_PUBLIC_HOST_SERVER}${currentChapter.image}`} />
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
