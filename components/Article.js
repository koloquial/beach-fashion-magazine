import React from 'react';

const Article = ({ article }) => {
    console.log('article', article);
  return (
    <div className='article-container'>
      <div>
        <h2>{article.title}</h2>
        <p>By {article.author}</p>
      </div>
      <div>
        {article.content.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Article;