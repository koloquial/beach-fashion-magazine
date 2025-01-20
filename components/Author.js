import React from 'react';

const Author = ({ author }) => {

  return (
    <div className='article-container'>
     
     <div className='author-heading'>
        <h2>{author.name}</h2>
      <img className='profile' src={author.profile} />
      </div>
      
      <p>{author.biographyStatement}</p>
      <h3>{author.horoscope.sign}</h3>
      <h3>{author.favorites.food}</h3>
      <h3>{author.favorites.beachAccessory}</h3>

        <h3>Likes</h3>
        <ul>
          {author.likesDislikes.likes.map((like, index) => (
            <li key={index}>{like}</li>
          ))}
        </ul>
        <h3>Dislikes</h3>
        <ul>
          {author.likesDislikes.dislikes.map((dislike, index) => (
            <li key={index}>{dislike}</li>
          ))}
        </ul>

        <h3>Turn-Ons</h3>
        <ul>
          {author.turnOnsTurnOffs.turnOns.map((turnOn, index) => (
            <li key={index}>{turnOn}</li>
          ))}
        </ul>
        <h3>Turn-Offs</h3>
        <ul>
          {author.turnOnsTurnOffs.turnOffs.map((turnOff, index) => (
            <li key={index}>{turnOff}</li>
          ))}
        </ul>
      </div>

  );
};

export default Author