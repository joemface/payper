import React, { useState } from 'react';
import AppContext from './AppContext';

const BookContextProvider = ({children}:any)=>{
    const [books, setBooks] = useState<any>();
    const context = {
        books,
        setBooks
    };

    return (
        <AppContext.Provider value = {context}>
            {children}
        </AppContext.Provider>
    );
}

export default BookContextProvider;