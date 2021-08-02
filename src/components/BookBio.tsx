import { Link, Route } from 'react-router-dom'
import Book from '../models/Book'
import BookPage from './BookPage';

type props = {
    book: Book
}

function BookBio({ book }: props) {
    return (
       
            <div id="books-container" className="card">
                
                   
                    <img className="card-img-top" id="book-img" src={book.img} />

                    <div className="card-body">

                        <h4 className="card-title ">{book.title}</h4>

                        <h5 className="card-subtitle ">{book.subtitle}</h5>

                        <p className="card-text">
                            by
                            <span className="bold"> {book.author}</span>
                        </p>
                        <p className="card-text" id="price">
                            <span className="bold">${book.price}</span>
                        </p>
                        <div id="cardBtns">
                            <button className="rounded-pill" style={btnMargin}>Add to cart</button>
                            <Link  to={{ pathname: `/book/${book.isbn}`, state: `${book}` }}>
                            <button className="rounded-pill" style={btnMargin}>Details</button>
                            </Link>
                        </div>
                    </div>
            
            </div>
  


    )
}

const btnMargin = {
    marginRight: '1rem',
}

export default BookBio;
