import React from 'react';

const Rumor = ({ article }) => {
    console.log('RUMOR', article)
  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', padding: '20px', background: '#fdf4e3' }}>
      <h1 style={{ textAlign: 'center', color: '#3a3a3a' }}>{article.title}</h1>
      <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#777' }}>By {article.author}</p>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#444', textAlign: 'justify' }}>
        <p>{article.introduction}</p>
        {article.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '24px', color: '#2a6f97' }}>{section.headline}</h2>
            <p>{section.body}</p>
          </div>
        ))}
        <div style={{ marginTop: '40px', fontStyle: 'italic', textAlign: 'right', color: '#555' }}>
          <p>{article.closing}</p>
          <p>{article.signature}</p>
        </div>
      </div>
    </div>
  );
};

export default Rumor