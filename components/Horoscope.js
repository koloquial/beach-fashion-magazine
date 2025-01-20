import React from 'react';

const Horoscope = ({ data }) => {
  return (
    <div >
      <div >
        <h2>{data.title}</h2>
        <p>By {data.author}</p>
      </div>
      <p >
        {data.introduction}
      </p>
      <div >
        {Object.entries(data.horoscopes).map(([sign, details]) => (
          <div key={sign} style={{ marginBottom: '20px' }}>
            <h3>
              {sign} ({details.dates})
            </h3>
            <p>{details.message}</p>
          </div>
        ))}
      </div>
      <p >
        {data.closing}
      </p>
      <p>{data.signature}</p>
    </div>
  );
};

export default Horoscope;