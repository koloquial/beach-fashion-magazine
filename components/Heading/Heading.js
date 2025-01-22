import Link from "next/link";

import { FaShareAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const Heading = ({ article }) => {
    return (
        <div>
            <p className='title'>BEACH FASHION MAGAZINE</p>
            <div className='author-grid'>
               <div className='profile-container'>
                 <img src={`${process.env.NEXT_PUBLIC_HOST_SERVER}/images/authors/${article.author.toLowerCase().replace(/\s+/g, '-')}.webp`} />
                
                 <div className='attribution'>
                  <p className='small-text'>Written by</p>
              
                  <Link href={`/authors/${article.author.toLowerCase().replace(/\s+/g, '-')}`}>
                     {article.author}
                   </Link>
                </div>
                </div>
            
                

                <div className='social-buttons'>
            <a href='#'>
            <p><FaShareAlt /> </p>
            </a>
            
          
          <a href='#'>
          <p><FaComment /> </p>
          </a>
        
          <a href='#'>
            <p><BiLike /> </p>
            </a>
            </div>
            </div>
          </div>
    )
}

export default Heading;