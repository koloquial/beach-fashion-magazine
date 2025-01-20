import React from 'react';

const Horoscope = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', padding: '20px', background: '#fdf4e3', lineHeight: '1.8' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#3a3a3a' }}>{data.title}</h1>
        <p style={{ fontStyle: 'italic', color: '#777' }}>By {data.author}</p>
      </div>
      <p style={{ maxWidth: '800px', margin: '0 auto', color: '#444', textAlign: 'justify' }}>
        {data.introduction}
      </p>
      <div style={{ marginTop: '30px', maxWidth: '800px', margin: '30px auto', textAlign: 'left' }}>
        {Object.entries(data.horoscopes).map(([sign, details]) => (
          <div key={sign} style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#2a6f97' }}>
              {sign} ({details.dates})
            </h2>
            <p>{details.message}</p>
          </div>
        ))}
      </div>
      <p style={{ maxWidth: '800px', margin: '40px auto 20px', textAlign: 'justify', color: '#444' }}>
        {data.closing}
      </p>
      <p style={{ textAlign: 'right', fontStyle: 'italic', color: '#777' }}>{data.signature}</p>
    </div>
  );
};

export default Horoscope;