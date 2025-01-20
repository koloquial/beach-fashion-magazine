import React from 'react';

const Ad = ({ ad }) => {
  return (
    <div className="ad-container">
      <h1 className="ad-title">{ad.title}</h1>
      <h2 className="ad-tagline">{ad.tagline}</h2>
      <p className="ad-description">{ad.description}</p>
      {ad.keyFeatures && (
        <div className="ad-features">
          <h3>Key Features:</h3>
          <ul>
            {ad.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {ad.variants && (
        <div className="ad-variants">
          <h3>Available Variants:</h3>
          <ul>
            {ad.variants.map((variant, index) => (
              <li key={index}>{variant}</li>
            ))}
          </ul>
        </div>
      )}
      {ad.exclusiveCollection && (
        <div className="ad-collection">
          <h3>Exclusive Summer Collection:</h3>
          <ul>
            {ad.exclusiveCollection.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {ad.specialOffer && <p className="ad-offer">🌟 {ad.specialOffer}</p>}
      {ad.notes && (
        <div className="ad-notes">
          <h3>Notes:</h3>
          <ul>
            {ad.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
      {ad.idealFor && (
        <div className="ad-ideal">
          <h3>Perfect For:</h3>
          <ul>
            {ad.idealFor.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="ad-cta">{ad.cta}</p>
      {ad.closingLine && <p className="ad-closing">{ad.closingLine}</p>}
    </div>
  );
};

export default Ad;
