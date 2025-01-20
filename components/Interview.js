import React from 'react';

const Interview = ({ article }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', padding: '20px', background: '#fdf4e3' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#3a3a3a' }}>{article.title}</h1>
        <p style={{ fontStyle: 'italic', color: '#777' }}>By {article.author}</p>
      </div>
      <p style={{ maxWidth: '800px', margin: '0 auto', color: '#444', textAlign: 'justify' }}>
        {article.introduction}
      </p>
      <div style={{ maxWidth: '800px', margin: '30px auto' }}>
        {article.interview.map((qna, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold', color: '#2a6f97' }}>{qna.question}</p>
            <p>{qna.answer}</p>
          </div>
        ))}
      </div>
      <p style={{ maxWidth: '800px', margin: '40px auto 20px', textAlign: 'justify', color: '#444' }}>
        {article.conclusion}
      </p>
      <p style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'justify', color: '#444' }}>
        {article.cta}
      </p>
      <p style={{ textAlign: 'right', fontStyle: 'italic', color: '#777' }}>{article.signature}</p>
    </div>
  );
};

export default Interview
