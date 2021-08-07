import { ReactElement, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../models/Book';
import BookBio from './BookBio';
import '../styles/App.css';
import AppContext from '../contexts/AppContext';
import { getBooks } from '../api/BookAPI';
import ShoppingCart from './Shop';

function DisplayBooks(props:any) {
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
           books.map((bk)=>{ return<BookBio onBookDataHandler={props.addToCart} book={bk} key={bk.isbn} /> })
           :
           <div>No books found!</div>
           }
        
        </div>
        </div>
    )
}


export default DisplayBooks;