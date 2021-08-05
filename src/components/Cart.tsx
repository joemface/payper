
import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../models/Book';
import '../styles/CartPage.css';

function Cart(props:any) {

  return (
    <main role="main" id="mainCartPage">

      <section id="section" className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Shopping Cart</h1>
          <p className="lead text-muted">Modify your list of items here</p>
          
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4 shadow-sm">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div id="itemBtns" className="btn-group">
                      
                        <button id="cartBtn" type="button" className="btn btn-sm btn-outline-secondary">Details</button>
                      
                      <button id="remove" type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
            <Link to={{ pathname: `/checkout`, state: `${props}` }} className="btn btn-primary my-2">Checkout</Link>

          </p>
      </div>



    </main>
  )
}

export default Cart;