import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Book from '../models/Book';
import BookBio from './BookBio';
import '../styles/App.css';


type Props = { books: Book[]};
type State = {};

function DisplayBooks({ books }: Props): ReactElement<any, any> {
console.log(books);
    return (
        <div id="book-display">
           {books.map((bk)=>{ return <BookBio book={bk} key={bk.isbn} />})}
           
            {/*{books.map(bk => <Link to={{pathname: `/${bk.isbn}`, state: `${bk}`}}><BookBio book={bk} key={bk.isbn} /></Link>)}*/}
        </div>
    )
}


export default DisplayBooks;