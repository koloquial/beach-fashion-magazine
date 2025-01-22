'use client'
import React, { use, useState, useEffect } from 'react'
import Loading from '@/components/Loading';

import { GiAries } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";
import { FaIceCream } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { PiBeachBallFill } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const fetchAuthorBySlug = async (slug) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_SERVER}/authors/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const author = await response.json();
    return author;
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
};

const AuthorPage = ({params}) => {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedAuthor = await fetchAuthorBySlug(slug);
      setAuthor(resolvedAuthor);
      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading>Loading author...</Loading>;
  }

  if (!author) {
    return <p>Author not found.</p>;
  }

  return (
<div className='page-container'>
      <div className='article-container'>

<p className='title'>BEACH FASHION MAGAZINE</p>
<h2>{author.name}</h2>
<img className='article-image-2' src={`${process.env.NEXT_PUBLIC_HOST_SERVER}${author.profile}`} />
<p>{author.statement}</p>
<GiAries />
      <h3>Favorites</h3>
      <div className='favorites'>
        <div>
        <PiHamburgerFill />
        <p className='text-small'>{author.favorites.food}</p>
</div>
        <div>
        <RiDrinks2Fill />
        <p className='text-small'>{author.favorites.drink}</p>
</div>
        <div>
          <FaIceCream />
        <p className='text-small'>{author.favorites.dessert}</p>
        
          </div>

          <div>
          <FaMusic />
        <p className='text-small'>{author.favorites.music}</p>
        
          </div>

          <div>
          <MdLocalMovies />
        <p className='text-small'>{author.favorites.movie}</p>
        
          </div>
      
          <div>
          <IoBook />
        <p className='text-small'>{author.favorites.book}</p>
        
          </div>

          <div>
          <PiBeachBallFill />
        <p className='text-small'>{author.favorites.game}</p>
        
          </div>
      
      </div>
      
      <div className='likes-dislikes'>
        <div>
        <AiFillLike />
        <ul>
          {author.likesDislikes.likes.map((like, index) => (
            <li key={index}>{like}</li>
          ))}
        </ul>
          </div>
          <div>
          <AiFillDislike />
          <ul>
          {author.likesDislikes.dislikes.map((dislike, index) => (
            <li key={index}>{dislike}</li>
          ))}
        </ul>
          </div>
      </div>

      <div className='likes-dislikes'>
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
      </div>
      </div>
  )

};

export default AuthorPage;
