
import '../styles/Navbar.css'

const SearchBar = ()=> {
return(

  <form  className="form-inline">
    <input className="form-control mr-sm-2" id="search-bar" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success rounded-pill" type="submit">Explore!</button>
  </form>

    
    
)
};

export default SearchBar;