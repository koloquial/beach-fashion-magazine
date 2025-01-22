'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading';
import Heading from '@/components/Heading';
import { fetchArticle } from '@/functions/fetchArticle';

const Reflections = ({ params }) => {
  const resolvedParams = use(params); 
  const { slug } = resolvedParams;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedArticle = await fetchArticle('reflection', slug);
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

  
        <Heading article={article} />
          

        

      <div className='content-section'>
      <h2>{article.title}</h2>
      <p className='small-text'>{article.date}</p>
        <div className='text-content'>
          {article.content.map((paragraph, index) => {
            if(index === 1){
              return (<div key={index}>
              {article.images && <img className='article-image-1' src={`${process.env.HOST_SERVER}${article.images[0]}`} />}
              <p >{paragraph}</p>
              </div>)
            }

            if(index === 3){
              return (<div key={index}>
              {article.images && <img className='article-image-2' src={`${process.env.HOST_SERVER}${article.images[1]}`} />}
              <p >{paragraph}</p>
              </div>)
            }

            if(index === 5){
              return (<div key={index}>
              {article.images && <img className='article-image-3' src={`${process.env.HOST_SERVER}${article.images[2]}`} />}
              <p >{paragraph}</p>
              </div>)
            }

            return (
            <p key={index}>{paragraph}</p>
          )
})}
        </div>
      </div>

      <h2>Comments</h2>
      <hr />
    </div>

    </div>
  );
};

export default Reflections;
