
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Book from '../models/Book';
import '../styles/Navbar.css'
import BookBio from './BookBio';

const SearchBar = (props:any)=> {
  const [search, setSearch] = useState('');
  //const [list, setList] = useState([props.books]);

  useEffect(()=>{
    
    setSearch(props);
  })
return(

  <div id="search">
     <input id="search-bar" className="form-control mr-sm-2 rounded-pill" type="search" onChange={event => {setSearch(event.target.value)}} placeholder="Search by title, author or ISBN" />
    <button id="searchBtn" className="btn btn-outline-success rounded-pill" type="submit">Explore!</button>
  </div>

    
    
)
};

export default SearchBar;