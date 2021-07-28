import React, { Component } from 'react';
import {BrowserRouter as Router,
Switch,
Route} from 'react-router-dom';
import DisplayBooks from './DisplayBooks';
import '../styles/App.css';
import Book from '../models/Book';
import AddBook from './AddBook';
import Navbar from './Navbar';
import BookPage from './BookPage';
import { EventType } from '@testing-library/react';
import BookBio from './BookBio';


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
    fetch("http://localhost:8081/")
    .then(res => res.json())
    .then(bks => this.setState({books: bks}));

       }

  
  addBook = (book: Book) => {
    let newBooks = [...this.state.books, book];
    this.setState({books: newBooks});

  }

  indexer = function(event:EventType) {
    return event.indexOf("data-index");
  }

  render() {
    return ( 
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><DisplayBooks books={this.state.books}/></Route>
            
            <Route path="/create-book"><AddBook addBook={this.addBook}/></Route>
            <Route path="/:isbn" render={()=> <BookPage books={this.state.books}/>}></Route>
          </Switch>
          </Router>
    )
  }
}

export default App;
