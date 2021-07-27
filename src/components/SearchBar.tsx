
import '../styles/Navbar.css'

const SearchBar = ()=> {
return(
    <form id="search-form" className="search-form" action="/" method="get">
       
        <input type="text" id="searchBar" placeholder="Search by title, author, or ISBN" name="search"/>
        
        <button type="submit" id="searchBtn">Explore!</button>
    </form>
)
};

export default SearchBar;