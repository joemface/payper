
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Book from '../models/Book';
import '../styles/Navbar.css'
import BookBio from './BookBio';

const SearchBar = (props:any)=> {
  const [search, setSearch] = useState('');
  //const [list, setList] = useState([props.books]);

  const filterChangeHandler = (search:any)=>{
    setSearch(search);
  }
  useEffect(()=>{
    
    setSearch(props);
  })
return(

  <div id="search">
     <input id="search-bar" className="form-control mr-sm-2 rounded-pill" type="search" onChange={(e:any)=>{filterChangeHandler(e.target.value)}} placeholder="Search by title, author, or isbn" />
    <button id="searchBtn" className="btn btn-outline-success rounded-pill" type="submit">Explore!</button>
  </div>

    
    
)
};

export default SearchBar;