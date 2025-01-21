'use client'
import React, { use, useState, useEffect } from 'react'
import Link from 'next/link';
import Loading from '@/components/Loading';

const fetchArticleBySlug = async (slug) => {
  try {
    const response = await fetch(`http://localhost:5000/interview/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const interview = await response.json();
    return interview;
  } catch (error) {
    console.error('Error fetching interview:', error);
    return null;
  }
};

const InterviewPage = ({params}) => {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedInterview = await fetchArticleBySlug(slug);
      setInterview(resolvedInterview);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading>Loading interview...</Loading>;
  }

  if (!interview) {
    return <p>Interview not found.</p>;
  }

  return (
    <div className='page-container'>
      <div className='article-container'>

        <p className='title'>BEACH FASHION MAGAZINE</p>
        <div className='author-grid'>
            <div className='profile-container'>
              <img src={`http://localhost:5000/images/authors/${interview.author.toLowerCase().replace(/\s+/g, '-')}.webp`} />
            </div>
            
            <div className='attribution'>
              <p className='small-text'>Written by</p>
              
              <Link href={`/authors/${interview.author.toLowerCase().replace(/\s+/g, '-')}`}>
                {interview.author}
              </Link>
            </div>
          </div>
         
        

      <div className='content-section'>
      <h2>{interview.title}</h2>
      <p className='small-text'>{interview.date}</p>
        <div className='text-content'>
        <img className='article-image-2' src={`http://localhost:5000${interview.images[0]}`} />
          <p>{interview.introduction}</p>

        {interview.interview.map(passage => {
          return (
            <>
            <h3>{passage.question}</h3>
            <p>{passage.answer}</p>
            </>
          )
        })}



        <p>{interview.closing}</p>
        <p>{interview.rating}</p>
        <p>{interview.signature}</p>
      </div>
    </div>
    </div>
    </div>
  )

};

export default InterviewPage;
