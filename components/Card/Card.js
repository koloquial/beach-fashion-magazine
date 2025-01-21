import Link from "next/link";

const Card = ({ article }) => {
    return (
        <div key={`${article.name}`}>
        <Link href={`/${article.type.toLowerCase()}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="card">
            <div className='card-thumbnail'>
            {article.images && <img src={`http://localhost:5000${article.images[0]}`} />}
            
            </div>
            <div className='title-author'>
            <p>{article.title[0].toUpperCase()}{article.title.slice(1, article.title.length)}</p>

            <p className='date'>{article.type[0].toUpperCase()}{article.type.slice(1, article.type.length)}</p>

            <p className='date'>{article.author}</p>
            </div>
            
        </div>
        </Link>
        </div>
    )
}

export default Card;

