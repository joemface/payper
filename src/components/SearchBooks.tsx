import React, { useState} from 'react'
import { searchBooks } from '../api/BookAPI';
import Book from '../models/Book';
import queryArgs from '../utils/gqlQueryBuilder';

import BookBio from './BookBio';


function SearchBooks() {
    const [queryState, setQueryState] = useState({queryName:'bookByTitle', queryValue:''})
    const [bookSearchResult, setBookSearchResult] = useState<Book[]>([]);

    const handleChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const name = target.name;
        setQueryState({
            ...queryState,
            [name]: value
        })
    }

    const submitForm = (event: React.SyntheticEvent) => {
        event.preventDefault();

        let queryArgsFunction = queryArgs[queryState.queryName];
        let queryVars = queryArgsFunction(queryState.queryValue);

        const query = `{${queryState.queryName}${queryVars}{title,subtitle,author,isbn}}`

        searchBooks(query)
        .then((res)=>{
            console.log( res.data[queryState.queryName]);
            setBookSearchResult(res.data[queryState.queryName])
        });
    }

    return (
        <div>
            <div className="container">
                <h1>Search For A Book</h1>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={submitForm} id="searchForm" >
                            <div className="form-group">
                                <label htmlFor="searchField">Choose Field</label>
                                <select name="queryName" className="form-control" onChange={handleChange}>
                                    <option value="bookByTitle">Title</option>
                                    <option value="bookBySubtitle">Subtitle</option>
                                    <option value="bookByAuthor">Author</option>
                                    <option value="bookByIsbn">ISBN</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" name="queryValue" className="form-control" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    bookSearchResult
                    ?
                        bookSearchResult.map(bk=>{return <BookBio book={bk} key={bk.isbn}/>})
                    :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default SearchBooks