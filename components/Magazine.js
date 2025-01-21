'use client'
import { useState, useEffect } from 'react'
import Card from './Card';
import Loading from './Loading';

const fetchArticles = async () => {
  try {
    const response = await fetch(`http://localhost:5000/articles/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

  const Magazine = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const resolvedArticles = await fetchArticles();
        setArticles(resolvedArticles);
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <Loading>Loading articles</Loading>;
    }
  
    if (!articles) {
      return <p>Article not found.</p>;
    }
    return (
      <div className="container">
        <h1>BEACH FASHION MAGAZINE</h1>
        <video className="background-video" autoPlay muted loop>
        <source src="/videos/january_2025_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
            <div className="grid">
              {articles.map((article, index) => (
                <Card key={index} article={article} />
              ))}
            </div>

            {/* <div className="authors">
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
            </div> */}
     
    
       
      </div>
    );
  };
  
  export default Magazine;
  