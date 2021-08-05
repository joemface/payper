import React from 'react';
import Book from '../models/Book';
type BooksContext = {books: Book[], setBooks:(book:Book[])=>void};
const initialContext = {
    books: [],
    setBooks: ()=>{}
}
const AppContext = React.createContext<BooksContext>(initialContext);
export default AppContext;