import { Link } from 'react-router-dom';
import React, {ReactElement, useState} from 'react';
import { Cart } from 'react-bootstrap-icons';
import logo from '../book-icon.png';
import '../styles/Navbar.css';
import Book from '../models/Book';
import ShoppingCart from '../components/Cart'

function Navbar(props:any) {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <Link to={{pathname:"/books", state: `${props.books}` }} className="navbar-brand" >
            <img id="payper" className="brand" src={logo} alt='logo' />     Payper
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li id="nav-item active">
              
               
                <div id="book-display">
        
              {/* <SearchBar/> */}
          
        </div>
                </li>
            <li className="nav-item">

              <Link to={{pathname: "/shopping-cart", state: `${props.books}`}} id="shopping-cart" className="nav-link"><Cart size={26}/></Link>
            </li>
            <li className="nav-item">
              <Link to="/create-book" className="nav-link">Upload</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to={{ pathname: `/checkout`, state: `${props.books}` }}>Checkout</Link></li>

          </ul>

        </div>
      </nav>
    </div>


    // <nav id="navbar" className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">

    //     <Link className="navbar-brand" to="/">
    //         <img className="brand" src={logo} alt='logo' />     Payper
    //     </Link>


    //     <ul className="navbar-nav">
    // <li id="nav-search"><SearchBar /></li>
    // <li className="nav-item">

    //     <Link to="/shopping-cart" className="nav-link"><Cart size={25} /></Link>
    // </li>
    // <li className="nav-item">
    //     <Link to="/create-book" className="nav-link">Upload</Link>
    // </li>
    //     </ul>
    // </nav>





  )
}

export default Navbar;