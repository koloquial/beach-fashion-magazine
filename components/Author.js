import React from 'react';

const Author = ({ author }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', padding: '20px', background: '#fdf4e3' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#3a3a3a' }}>About the Author: {author.name}</h1>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#444' }}>
        <h2 style={{ color: '#2a6f97' }}>Personal Details</h2>
        <p><strong>Birthdate:</strong> {author.personalDetails.birthdate}</p>
        <p><strong>Age:</strong> {author.personalDetails.age}</p>
        <p><strong>Height:</strong> {author.personalDetails.height}</p>
        <p><strong>Hair Color:</strong> {author.personalDetails.hairColor}</p>
        <p><strong>Appearance:</strong> {author.personalDetails.appearance}</p>

        <h2 style={{ color: '#2a6f97', marginTop: '20px' }}>Favorites</h2>
        <p><strong>Food:</strong> {author.favorites.food}</p>
        <p><strong>Beach Accessory:</strong> {author.favorites.beachAccessory}</p>

        <h2 style={{ color: '#2a6f97', marginTop: '20px' }}>Likes & Dislikes</h2>
        <h3>Likes:</h3>
        <ul>
          {author.likesDislikes.likes.map((like, index) => (
            <li key={index}>{like}</li>
          ))}
        </ul>
        <h3>Dislikes:</h3>
        <ul>
          {author.likesDislikes.dislikes.map((dislike, index) => (
            <li key={index}>{dislike}</li>
          ))}
        </ul>

        <h2 style={{ color: '#2a6f97', marginTop: '20px' }}>Turn-Ons & Turn-Offs</h2>
        <h3>Turn-Ons:</h3>
        <ul>
          {author.turnOnsTurnOffs.turnOns.map((turnOn, index) => (
            <li key={index}>{turnOn}</li>
          ))}
        </ul>
        <h3>Turn-Offs:</h3>
        <ul>
          {author.turnOnsTurnOffs.turnOffs.map((turnOff, index) => (
            <li key={index}>{turnOff}</li>
          ))}
        </ul>

        <h2 style={{ color: '#2a6f97', marginTop: '20px' }}>Horoscope</h2>
        <p><strong>Sign:</strong> {author.horoscope.sign}</p>
        <p>{author.horoscope.message}</p>

        <h2 style={{ color: '#2a6f97', marginTop: '20px' }}>Biography Statement</h2>
        <p>{author.biographyStatement}</p>
      </div>
    </div>
  );
};

export default Author