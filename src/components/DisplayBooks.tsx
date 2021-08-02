import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Book from '../models/Book';
import BookBio from './BookBio';
import '../styles/App.css';


type Props = { books: Book[]};
type State = {};

function DisplayBooks({ books }: Props): ReactElement<any, any> {

    return (
        <div>
            
        
        <div id="book-display">
        <h1 id="books-h1">Recommended for you</h1>
           {books.map((bk)=>{ return <BookBio book={bk} key={bk.isbn} />})}
           
            {/*{books.map(bk => <Link to={{pathname: `/${bk.isbn}`, state: `${bk}`}}><BookBio book={bk} key={bk.isbn} /></Link>)}*/}
        </div>
        </div>
    )
}


export default DisplayBooks;