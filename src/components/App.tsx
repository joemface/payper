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
import ShoppingCart from './Cart';



type Props = {};
type State ={ books: Book[], cart: Book[]};

class App extends Component <Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      books: [],
      cart: []
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
          <Navbar/>
          <Switch>
            <Route exact path="/"><DisplayBooks books={this.state.books}/></Route>
            <Route path="/checkout"><Checkout books={this.state.books}/></Route>
            <Route path="/shopping-cart"><ShoppingCart books={this.state.books}/></Route>
            <Route path="/create-book"><CreateBook createBook={this.createBook}/></Route>
            <Route path="/book/:isbn" component={BookPage}></Route>
          </Switch>
          <footer className="container">
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>&copy; 2021 Payper, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
          </Router>
    )
  }
}

export default App;
