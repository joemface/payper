import React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import logo from '../book-icon.png';
import '../styles/Navbar.css';
import SearchBar from './SearchBar';




function Navbar(props: any) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <Link className="navbar-brand" to="/">
            <img className="brand" src={logo} alt='logo' />     Payper
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li id="nav-item active">
              <form className="form-inline my-2 my-lg-0">
                <input id="search-bar" className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search by title, author or ISBN" aria-label="Search" />
                <button className="btn btn-outline-success rounded-pill my-2 my-sm-0" type="submit">Explore!</button>
              </form></li>
            <li className="nav-item">

              <Link to="/shopping-cart" id="shopping-cart" className="nav-link"><Cart size={30} /></Link>
            </li>
            <li className="nav-item">
              <Link to="/create-book" className="nav-link">Upload</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to={{ pathname: `/checkout`, state: `${props}` }}>Checkout</Link></li>

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