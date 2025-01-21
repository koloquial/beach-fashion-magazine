'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';

const fetchArticleBySlug = async (slug) => {
  console.log('called');
  try {
    const response = await fetch(`http://localhost:5000/music/${slug}`);
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

const Music = ({ params }) => {
  const resolvedParams = use(params); 
  const { slug } = resolvedParams;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedArticle = await fetchArticleBySlug(slug);
      setArticle(resolvedArticle);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading>Loading music article</Loading>;
  }

  if (!article) {
    return <p>Music article not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='article-container'>

        <p className='title'>BEACH FASHION MAGAZINE</p>
        <div className='author-grid'>
            <div className='profile-container'>
              <img src={`http://localhost:5000/images/authors/${article.author.toLowerCase().replace(/\s+/g, '-')}.webp`} />
            </div>
            
            <div className='attribution'>
              <p className='small-text'>Written by</p>
              
              <Link href={`/authors/${article.author.toLowerCase().replace(/\s+/g, '-')}`}>
                {article.author}
              </Link>
            </div>
          </div>
         
        

      <div className='content-section'>
      <h2>{article.title}</h2>
      <p className='small-text'>{article.date}</p>
        <div className='text-content'>
        <img className='article-image-2' src={`http://localhost:5000${article.images[1]}`} />
          <p>{article.introduction}</p>

        {article.sections.map(passage => {
          return (
            <>
            <h3>{passage.headline}</h3>
            <p>{passage.body}</p>
            </>
          )
        })}

<img className='article-image-1' src={`http://localhost:5000${article.images[0]}`} />

        <p>{article.closing}</p>
        <p>{article.rating}</p>
        <p>{article.signature}</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Music;
