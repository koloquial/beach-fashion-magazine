import React from 'react';

const Story = ({ article }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', padding: '20px', background: '#fdf4e3' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#3a3a3a' }}>{article.title}</h1>
        <p style={{ fontStyle: 'italic', color: '#777' }}>By {article.author}</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#444', textAlign: 'justify' }}>
        {article.content.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '20px' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Story
