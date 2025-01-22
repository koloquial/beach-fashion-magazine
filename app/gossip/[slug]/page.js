'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';
import Heading from '@/components/Heading/Heading';

const fetchArticleBySlug = async (slug) => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_SERVER}/gossip/${slug}`);
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

const GossipPage = ({ params }) => {
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
    return <p>Gossip article not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='article-container'>

      <Heading article={article} />
         
        

      <div className='content-section'>

        <h2 >{article.title}</h2>

      </div>
      <div>
        {article.content.map((section, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h3>{section.headline}</h3>
            <img className={`article-image-${index % 2 === 0 ? '2' : '1'}`} src={`${process.env.NEXT_PUBLIC_HOST_SERVER}${article.images[index]}`} />
            <p>{section.body}</p>
          </div>
        ))}
      </div>
      
        <p>{article.closing}</p>
        <p >{article.signature}</p>


    </div>
        

    </div>
   
  );
};

export default GossipPage;
