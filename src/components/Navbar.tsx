import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../book-icon.png';
import '../styles/Navbar.css';
import SearchBar from './SearchBar';

function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <Link className="navbar-brand" to="/">
                <img className="brand" src={logo} alt='logo' />     Payper
            </Link>
            <div id="nav-search" className="nav-search">
                <SearchBar/>
                </div>
            <ul className="navbar-nav">
               
                <li className="nav-item">
                    <Link to="/create-book" className="nav-link">Upload</Link>
                </li>
               
            </ul>
        </nav>
    )
}

export default Navbar;