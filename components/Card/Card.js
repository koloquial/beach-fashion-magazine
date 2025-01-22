import Link from "next/link";

const Card = ({ article }) => {
    return (
        <div key={`${article.name}`} className='card-container'>
        <Link href={`/${article.type.toLowerCase()}/${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="card">
            <div className='card-thumbnail'>
            {article.images && <img src={`${process.env.NEXT_PUBLIC_API}${article.images[0]}`} />}
            </div>

            <div className='title-author'>
            <h2>
  {article.title.length > 30 
    ? `${article.title.slice(0, 30)}...` 
    : article.title[0].toUpperCase() + article.title.slice(1)}
</h2>

            <p className='text-small art-type'>{article.type[0].toUpperCase()}{article.type.slice(1, article.type.length)}</p>

            <p className='text-small art-type'>{article.author}</p>
            </div>
            
        </div>
        </Link>
        </div>
    )
}

export default Card;

