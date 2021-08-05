import { useContext, useEffect, useState } from 'react'
import {putBook} from '../api/Book';
import { useParams, withRouter } from 'react-router-dom';
import '../styles/App.css';
import AppContext from '../contexts/AppContext';
import BookForm from './BookForm';



function EditBook(props: any) {

    const {isbn} = useParams<any>();
    const {books} = useContext(AppContext);
    const [book, setBook] = useState<any>();

    useEffect(()=>{
        books?
        setBook(books.find(book=>book.isbn == isbn))
        :
        props.history.push('/');
    }, [isbn,books,book]);

    const submitForm = (book:any) =>{
        putBook(book)
        .then(props.hisotry.push("/"));
    }

    return (
        book?
        <BookForm title={`Edit ${book.title}`} book={book} submitForm={submitForm}/>
            : 
            <div>No book found to edit!</div>
    )
}


export default withRouter(EditBook);
