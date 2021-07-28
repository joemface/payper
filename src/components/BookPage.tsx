import React, {Component, ReactElement } from "react";

import Book from "../models/Book";
import BookBio from "./BookBio";

type Props = { books: Book[]};

function BookPage({ books }: Props): ReactElement<any, any> {
   
   
    return (
        <div>
          <br/>
          <br/>
          <br/>
               <h1>Welcome</h1>
               
            {/*  <BookBio book={books[0]} key={books[0]["isbn"]}/>*/}
        </div>
    )
}

export default BookPage;
