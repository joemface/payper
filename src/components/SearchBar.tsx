
import { useState } from 'react';
import Book from '../models/Book';
import '../styles/Navbar.css'
import BookBio from './BookBio';

const SearchBar = (props:any)=> {
  const result : Book[] = [];
  const [searchTerm, setSearchTerm] = useState(result);

  const updateText = ()=>{
    
  }
return(

  <form  className="form-inline">
     <input id="search-bar" className="form-control mr-sm-2 rounded-pill" type="search" onChange={event => {setSearchTerm(props.target.value)}} placeholder="Search by title, author or ISBN" aria-label="Search" />
     {props.filter((bk:any)=>{ return <BookBio book={bk} key={bk.isbn} />})}
    <button className="btn btn-outline-success rounded-pill" type="submit">Explore!</button>
  </form>

    
    
)
};

export default SearchBar;