import { useContext, useEffect, useState } from 'react'

import { useParams, withRouter } from 'react-router-dom';
import '../styles/App.css';
import AppContext from '../contexts/AppContext';
import BookForm from './BookForm';
import Book from '../models/Book';
import { putBook } from '../api/BookAPI';



function EditBook(props: any) {

    const {isbn} = useParams<any>();
    const {books} = useContext(AppContext);
    const[book, setBook] = useState<any>();
    
    useEffect(()=>{
        if(books){
           
            setBook(books.find(bk => bk.isbn ===isbn));
        }
    }, [book, books, setBook])

    
    const submitForm = (book:any) =>{
        putBook(book)
        .then(props.history.push('/books'));
    }
    
    return(
        book?
        <BookForm
        title={`Edit ${book.title}`}
        book={book}
        submitForm={submitForm} />
        : 
        <div>No book found!</div>
    )

}


export default withRouter(EditBook);
