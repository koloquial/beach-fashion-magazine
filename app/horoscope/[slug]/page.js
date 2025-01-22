'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';
import Heading from '@/components/Heading';

const fetchArticleBySlug = async (slug) => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/horoscope/${slug}`);
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

const HoroscopePage = ({ params }) => {
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
    return <Loading>Loading horoscope article</Loading>;
  }

  if (!article) {
    return <p>Horoscope article not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='article-container'>

      <Heading article={article} />
         
        

      <div className='content-section'>

        <h2>{article.title}</h2>
        <img className='article-image-2' src={`${process.env.NEXT_PUBLIC_API}${article.images[0]}`} />


      <p>
        {article.introduction}
      </p>
      <div>
        {Object.entries(article.horoscopes).map(([sign, details], index) => (
          <div key={sign} style={{ marginBottom: '20px' }}>
            <h3>
              {sign} ({details.dates})
            </h3>
            <img className={`article-image-${index % 2 === 0 ? '1' : '2'}`} src={`${process.env.NEXT_PUBLIC_API}${article.images[index + 1]}`} />
            <p>{details.message}</p>
          </div>
        ))}
      </div>
      <p >
        {article.closing}
      </p>
      <p>{article.signature}</p>
    </div>
        

    </div>
    </div>
   
  );
};

export default HoroscopePage;
