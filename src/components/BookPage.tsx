import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Book from "../models/Book";


type Props = { book: Book};
type State = {}
type bookInfo = {
    title?: string,
    subtitle?: string,
    author?: string,
    price?: number,
    isbn?: number,
    copies?: number,
    img?: string
}
type ISBN ={ isbn: string};
//with router higher order components

function BookPage(props: Props) {

    let [bk, setBk] = useState<bookInfo>();
    const {isbn} = useParams<ISBN>();
    
     useEffect(() => {
    {
       fetch(`http://localhost:8080/book/${isbn}`)
       .then(async (res) =>{ 
            bk = await res.json();
           
           setBk(bk);
    })
         
    }
    },[]);

    return (
        <div >
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <h1>Payper Book</h1>
            <img src={bk?.img}></img>
            <p>{bk?.title}</p>
            <p>{bk?.subtitle}</p>
            <p>{bk?.author}</p>
            <p>${bk?.price}</p>
            <p>{bk?.isbn}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default BookPage;
