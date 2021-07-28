import { Link } from 'react-router-dom'
import Book from '../models/Book'

type props = {
    book: Book
}

function BookBio({ book }: props) {
    return (
       
            <div id="books-container" className="card">
                <Link to={{ pathname: `/${book.isbn}`, state: `${book}` }}>

                    <img className="card-img-top" id="book-img" src={book.img} />

                    <div className="card-body">

                        <h4 className="card-title ">{book.title}</h4>

                        <h5 className="card-subtitle ">{book.subtitle}</h5>

                        <p className="card-text">
                            by
                            <span className="bold"> {book.author}</span>
                        </p>
                        <p className="card-text">
                            <span className="bold">${book.price}</span>
                        </p>

                        <p className="card-text">{book.isbn}</p>
                    </div>
                </Link>
            </div>
  


    )
}

export default BookBio
