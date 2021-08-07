import { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DisplayBooks from './DisplayBooks';
import '../styles/App.css';

import CreateBook from './CreateBook';
import Navbar from './Navbar';
import BookPage from './BookPage';
import Checkout from './Checkout';
import ShoppingCart from './Shop';
import EditBook from './EditBook';
import ScrollToTop from './ScrollToTop';





function App() {

  const [cart, setCart]= useState<any>([]);
    
     const addToCart=(product:any)=>{
        let cart2 = [...cart]
        cart2.push({ ...product })
        cart.map((i:any) => {
          if (i?.isbn === product?.isbn) {
            i.cart = true
          }
        })
        console.log(cart2);
        setCart(cart2)
    }


  return (
    <Router>
      <Navbar />
      <Switch>
        <ScrollToTop>
      <Route exact path="/"><h1 id="books-h1">Recommended for you</h1><DisplayBooks addToCart={addToCart}/></Route>
        <Route exact path="/books"><h1 id="books-h1">Recommended for you</h1><DisplayBooks addToCart={addToCart}/></Route>
        <Route path="/checkout"><Checkout /></Route>
        <Route path="/shopping-cart"><ShoppingCart cart={cart}/></Route>
        <Route path="/create-book"><CreateBook /></Route>
        <Route path="/book/:isbn" ><BookPage addItemsToCart={addToCart}/></Route>
        <Route path="/edit-book/:isbn"><EditBook/></Route>
        </ScrollToTop>
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


export default App;
