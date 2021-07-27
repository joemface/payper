import { ReactElement } from 'react';
import { connect } from 'react-redux';
import Book from '../models/Book';
import BookBio from './BookBio';
import '../styles/App.css';


type Props = { books: Book[]};
type State = {};

function DisplayBooks({ books }: Props): ReactElement<any, any> {

    return (
        <div id="book-display">
            <br />
            {books.map(bk => <BookBio book={bk} key={bk.isbn} />)}
        </div>
    )
}


export default DisplayBooks;