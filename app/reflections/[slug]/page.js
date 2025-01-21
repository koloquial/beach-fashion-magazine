'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';

const fetchArticleBySlug = async (slug) => {
  try {
    const response = await fetch(`http://localhost:5000/articles/${slug}`);
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

const Reflections = ({ params }) => {
  const resolvedParams = use(params); // Unwrap params if it's a Promise
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
    return <Loading>Loading article</Loading>;
  }

  if (!article) {
    return <p>Article not found.</p>;
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
          {article.content.map((paragraph, index) => {
            if(index === 1){
              return (<div key={index}>
              {article.images && <img className='article-image-1' src={`http://localhost:5000${article.images[0]}`} />}
              <p >{paragraph}</p>
              </div>)
            }

            if(index === 3){
              return (<div key={index}>
              {article.images && <img className='article-image-2' src={`http://localhost:5000${article.images[1]}`} />}
              <p >{paragraph}</p>
              </div>)
            }

            if(index === 5){
              return (<div key={index}>
              {article.images && <img className='article-image-3' src={`http://localhost:5000${article.images[2]}`} />}
              <p >{paragraph}</p>
              </div>)
            }

            return (
            <p key={index}>{paragraph}</p>
          )
})}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reflections;
