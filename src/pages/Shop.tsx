import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import '../styles/CartPage.css';


function Shop(props: any) {
 
  return (
    <div id="cart-page" >
      <title>Shopping Cart</title>
      <div id="total"><h4>Shopping Cart</h4></div>
      <div id="cart-items">
        {
          props.cart.map((i: any, index: number) => (
            <div className="card">
              <img className="card-img-top" src={i.img} />
              < tr key={i.isbn}>
                <div className="card-body">
                  <div className="card-title">{i.title}</div>
                  <h5>
                    ${i.price}
                  </h5>
                  <p id="inc-dec">
                    <button
                      onClick={() => props.dec(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                    </button>
                    <h5>{i.quantity}</h5>
                    <button
                      onClick={() => props.inc(i)}

                      className="btn btn-primary btn-sm"

                    >
                      +
                    </button>
                  </p>

                  <p>
                    <button onClick={() => {props.remove(i); }} className="btn btn-danger">
                      Remove
                    </button>
                  </p>
                </div>
              </tr >
            </div>
          ))
        }
  
           
        
      </div>
     
     
      <div id="total"><h4>TOTAL: ${props.total()}</h4>
      <Link to="/checkout"><button id="btn-billing" className="btn btn-primary btn-lg" type="submit">Continue to billing</button></Link>
      </div>
    </div >
  );
}

export default Shop;