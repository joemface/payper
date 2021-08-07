import { useState } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import Book from '../models/Book'
import ShoppingCart from './Shop';


function BookBio(props: any) {

    props.book.quantity = 1;
    return (

        <div id="books-container" className="card">
            <Link to={{ pathname: `/edit-book/${props.book.isbn}`, state: `${props.book}` }}>
                <a href="#" style={btnMargin}>Edit</a>
            </Link>

            <img className="card-img-top" id="book-img" src={props.book.img} />

            <div className="card-body">

                <h4 className="card-title ">{props.book.title}</h4>

                <h5 className="card-subtitle ">{props.book.subtitle}</h5>

                <p className="card-text">
                    by
                    <span className="bold"> {props.book.author}</span>
                </p>
                <p className="card-text" id="price" style={btns}>
                    <span className="bold">${props.book.price}</span>
                </p>
                <div id="cardBtns">
                    
                        <button onClick={(e)=>{e.preventDefault(); return props.onBookDataHandler(props.book)}} className=" btn btn-primary rounded-pill" style={btnMargin}>Add to cart</button>
                 
                    <Link to={{ pathname: `/book/${props.book.isbn}`, state: `${props.book}` }}>
                        <button className="btn btn-primary rounded-pill" style={btnMargin}>Details</button>
                    </Link>

                </div>
            </div>

        </div>



    )
}

const btnMargin = {
    marginRight: '1rem',


}

const btns = { marginBottom: '2rem' }
export default withRouter(BookBio);
