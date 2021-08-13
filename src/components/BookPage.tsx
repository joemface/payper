import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../styles/BookPage.css'
import Book from "../models/Book";


type ISBN = { isbn: string };
//with router higher order components

function BookPage(props:any) {

    let [bk, setBk] = useState<any>();
    
    const { isbn } = useParams<ISBN>();

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},   
       
    };
    
      
    useEffect(() => {
        {
            
            fetch(`https://cors-everywhere.herokuapp.com/http://payper-env.eba-f4t3tdk2.us-east-1.elasticbeanstalk.com/books/book/${isbn}`,requestOptions)
                .then(async (res) => {
                   const bookFound = await res.json();
                    bookFound.quantity =  1;
                    setBk(bookFound);
                })

        }
    }, []);

    return (
        <div id="bookPage" >
            
            <div className="row" >
                <div className="col-sm" >
                    <h1>{bk?.title}</h1>
                   
                    <h4>{bk?.subtitle}</h4>
                    <img className="card-img" style={imgStyle} src={bk?.img}></img>
                </div>
                <div id="theCard" className="card">

                    <div className="card-body" >

                        <div className="card-text" >


                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <h3>${bk?.price}</h3>
                            {
                                bk?.copies>0?
                                <h5>Copies - {bk?.copies}</h5>
                                :
                                <h5>Out of stock</h5>
                            }
                            
                            <p>ISBN - {bk?.isbn}</p>
                            
                            <button onClick={(e)=>{e.preventDefault(); return props.addItemsToCart(bk)}} className=" btn btn-primary rounded-pill" >Add to cart</button>
                        
                        </div>


                    </div>


                </div>
               
            </div>
        </div>
    )
}



const cardStyle = {
    
       
    
}

const overallDiv = {

    
    
}

const imgStyle = {
    width: '16rem',
    height: '22rem',
    
    marginLeft: '1rem' as const
}

export default BookPage;
