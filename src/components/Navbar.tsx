import React from 'react';
import { Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import logo from '../book-icon.png';
import '../styles/Navbar.css';
import SearchBar from './SearchBar';

function Navbar() {
    return (
        <div>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"/>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>


<nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark" >
  <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse active" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="navbar-brand" to="/">
                <img className="brand" src={logo} alt='logo' />     Payper
            </Link>
      </li>
      
      <li id="nav-search"><SearchBar /></li>
                 <li className="nav-item">

                    <Link to="/shopping-cart" className="nav-link"><Cart size={25} /></Link>
                </li>
                <li className="nav-item">
                    <Link to="/create-book" className="nav-link">Upload</Link>
                </li>
    </ul>
  </div>
  
</nav>
</div>


 // <nav id="navbar" className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">

        //     <Link className="navbar-brand" to="/">
        //         <img className="brand" src={logo} alt='logo' />     Payper
        //     </Link>


        //     <ul className="navbar-nav">
        //         <li id="nav-search"><SearchBar /></li>
        //         <li className="nav-item">

        //             <Link to="/shopping-cart" className="nav-link"><Cart size={25} /></Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/create-book" className="nav-link">Upload</Link>
        //         </li>
        //     </ul>
        // </nav>




       
    )
}

export default Navbar;