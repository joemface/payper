import { ReactElement, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from '../models/Book';
import BookBio from './BookBio';
import '../styles/App.css';
import AppContext from '../contexts/AppContext';
import { getBooks } from '../api/BookAPI';


function DisplayBooks() {

    const {books, setBooks} = useContext(AppContext);

    useEffect(()=>{
    getBooks()
    .then(books=>setBooks(books));
    },[]);

    return (
        <div>
            <title>Payper</title>
        
        <div id="book-display">
        
           { books?
           books.map((bk)=>{ return <BookBio book={bk} key={bk.isbn} />})
           :
           <div>No books found!</div>
           }
        </div>
        </div>
    )
}


export default DisplayBooks;