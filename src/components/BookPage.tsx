import React, { Component, ReactElement, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { withRouter } from "react-router-dom";

import Book from "../models/Book";
import BookBio from "./BookBio";

type Props = { book: Book};
type State = {}
//with router higher order components

function BookPage(props: Props) {

    const bk = useState();
    let params = useParams();
    useEffect(() => {
        {
            fetch(`http://localhost:8080/book/${props.book.isbn}`)
                .then(res => res.json())
        }

    }, );
    return (
        <div >
            <br />
            <br />
            <br />
            <br />
            <br />

            Hello
            
        </div>
    )
}

export default BookPage;
