import { Component } from 'react';
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import DisplayBooks from './DisplayBooks';
import '../styles/App.css';
import Book from '../models/Book';
import CreateBook from './CreateBook';
import Navbar from './Navbar';
import BookPage from './BookPage';
import Checkout from './Checkout';
import ShoppingCart from './Shop';
import EditBook from './EditBook';



type Props = {};
type State ={ books: Book[], prods: Book[]};

class App extends Component <Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      books: [],
      prods: []
    }
  }

   
  componentDidMount(){
    fetch("http://localhost:8080/")
    .then(res => res.json())
    .then(bks => this.setState({books: bks}));

       }

  
  createBook = (book: Book) => {
    let newBooks = [...this.state.books, book];
    this.setState({books: newBooks});

  }


  render() {
    return ( 
        <Router>
          <Navbar books={this.state.books}/>
          <Switch>
            <Route exact path="/"><h1 id="books-h1">Recommended for you</h1><DisplayBooks /></Route>
            <Route path="/checkout"><Checkout books={this.state.books}/></Route>
            <Route path="/shopping-cart"><ShoppingCart prods={this.state.prods}/></Route>
            <Route path="/create-book"><CreateBook createBook={this.createBook}/></Route>
            <Route path="/book/:isbn" component={BookPage}></Route>
            <Route path="/edit-book/:isbn" ><EditBook/></Route>
          </Switch>
          <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2021 Payper, Inc.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
          </Router>
    )
  }
}

export default App;
