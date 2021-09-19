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
import BookPage from '../pages/BookPage';
import Checkout from '../pages/Checkout';
import ShoppingCart from '../pages/Shop';
import EditBook from './EditBook';
import ScrollToTop from './ScrollToTop';
import SearchBooks from './SearchBooks';
import Login from '../pages/Login';
import Register from '../pages/Register';





function App() {

  const [cart, setCart]= useState<any>([]);
    
     const addToCart=(product:any)=>{
        let cart2 = [...cart]
        let isIn = false;
        cart2.map((i:any)=>{
          if(i?.isbn === product?.isbn){
            i.quantity +=1;
            isIn = true;
        }})
        if(!isIn){
          cart2.push({...product});
        }
        
        cart.map((i:any) => {
          
          if (i?.isbn === product?.isbn) {
            i.cart = true;
            
          }
        })
        
        setCart(cart2)
    }

    function removeFromCart(item: any) {
      let cart2 = cart.filter((i: any) => i.isbn != item.isbn)
      cart2.map((i: any) => {
        if (i.isbn == item.isbn) {
          i.cart = false
        }
      })
      setCart(cart2)
  
    }

    function increase(item: any) {
      let x = cart.map((i: any) => {
  
        if (item.isbn == i.isbn) {
  
          i.quantity += 1
        }
        return i
      })
      setCart(x)
  
    }
    function decrease(item: any) {
      let x = cart.map((i: any) => {
  
        if (item.isbn == i.isbn && i.quantity > 1) {
  
          i.quantity -= 1
        }
        return i
      })
      setCart(x)
    }
    function total() {
      let cost = 0
      cart.map((item: any) => {
        cost += (item.price * item.quantity)
  
      })
      return cost.toFixed(2);
    }


  return (
    <Router>
      <Navbar cart={cart}/>
      <Switch>
        <ScrollToTop>
          <Route path="/search"><SearchBooks/></Route>
      <Route exact path="/"><h1 id="books-h1">Recommended for you</h1><DisplayBooks addToCart={addToCart}/></Route>
        <Route exact path="/books"><h1 id="books-h1">Recommended for you</h1><DisplayBooks addToCart={addToCart}/></Route>
        <Route path="/checkout" ><Checkout cart={cart} total={total}/></Route>
        <Route path="/shopping-cart"><ShoppingCart cart={cart} remove={removeFromCart} inc={increase} dec={decrease} total={total}/></Route>
        <Route path="/create-book"><CreateBook /></Route>
        <Route path="/book/:isbn" ><BookPage addItemsToCart={addToCart}/></Route>
        <Route path="/edit-book/:isbn"><EditBook/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/register"><Register/></Route>
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
