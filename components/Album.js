import React from 'react';

const Album = ({ article }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', padding: '20px', background: '#fdf4e3' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#3a3a3a' }}>{article.title}</h1>
        <p style={{ fontStyle: 'italic', color: '#777' }}>By {article.author}</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#444', textAlign: 'justify' }}>
        <p>{article.introduction}</p>
        {article.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '24px', color: '#2a6f97' }}>{section.headline}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: '800px', margin: '40px auto 20px', textAlign: 'justify', color: '#444' }}>
        <p>{article.closing}</p>
        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#555' }}>{article.rating}</p>
        <p style={{ textAlign: 'right', fontStyle: 'italic', color: '#777' }}>{article.signature}</p>
      </div>
    </div>
  );
};

export default Album
