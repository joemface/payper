import React, { Component } from 'react';
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import DisplayBooks from './DisplayBooks';
import '../styles/App.css';
import Book from '../models/Book';
import AddBook from './AddBook';
import Navbar from './Navbar';
import Home from './Home';


type Props = {};
type State ={ books: Book[]};

class App extends Component <Props, State> {

  constructor(props: any) {
    super(props)
    this.state = {
      books: []
    }
  }

   
  componentDidMount(){
    fetch("http://localhost:8080/")
    .then(res => res.json())
    .then(bks => this.setState({books: bks}));

       }

  
  addBook = (book: Book) => {
    let newBooks = [...this.state.books, book];
    this.setState({books: newBooks});

  }

  render() {
    return ( 
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><DisplayBooks books={this.state.books}/></Route>
            
            <Route path="/create-book"><AddBook addBook={this.addBook}/></Route>
          
          </Switch>
          </Router>
    )
  }
}

export default App;
