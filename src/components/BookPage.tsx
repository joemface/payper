import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../styles/App.css'
import Book from "../models/Book";


type ISBN = { isbn: string };
//with router higher order components

function BookPage() {

    let [bk, setBk] = useState<any>();
    const [cart, setCart] = useState<any>([])

    const { isbn } = useParams<ISBN>();

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},   
       
    };

    function addtocart(item:any) {
        let cart2 = [...cart]
        cart2.push({ ...item })
        
        setCart(cart2)
        
      }
      
    useEffect(() => {
        {
            
            fetch(`http://localhost:8080/books/book/${isbn}`,requestOptions)
                .then(async (res) => {
                   const bookFound = await res.json();
                    
                    setBk(bookFound);
                })

        }
    }, []);

    return (
        <div id="bookPage"  style={overallDiv}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row" >
                <div className="col-sm" >
                    <h1>{bk?.title}</h1>
                    <h4>{bk?.subtitle}</h4>
                    <img className="card-img" style={imgStyle} src={bk?.img}></img>
                </div>
                <div className="card" style={cardStyle}>

                    <div className="card-body" >

                        <div className="card-text" >


                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <h3>${bk?.price}</h3>
                            <p>ISBN {bk?.isbn}</p>
                            <button onClick={()=>{ addtocart(bk)}} className=" btn btn-primary rounded-pill" >Add to cart</button>
                        
                        </div>


                    </div>


                </div>
               
            </div>
        </div>
    )
}



const cardStyle = {
    
    width: '30rem',
    height: 'auto',    
    
}

const overallDiv = {

    backgroundColor: '#f4f1de',
    paddingBottom: '1rem',
    justifyContent: 'center',
    margin: 'auto',
    display: 'flex' as const,
    flexWrap: 'wrap' as const,
    paddingTop: '8%',
    
}

const imgStyle = {
    width: '16rem',
    height: '22rem',
    
    marginLeft: '1rem' as const
}

export default BookPage;
