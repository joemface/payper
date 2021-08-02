import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Book from "../models/Book";


type Props = { book: Book };
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
type ISBN = { isbn: string };
//with router higher order components

function BookPage(props: Props) {

    let [bk, setBk] = useState<bookInfo>();
    const { isbn } = useParams<ISBN>();

    useEffect(() => {
        {
            fetch(`http://localhost:8080/book/${isbn}`)
                .then(async (res) => {
                    bk = await res.json();

                    setBk(bk);
                })

        }
    }, []);

    return (
        <div style={overallDiv}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row" >
                <div className="col-sm-5" >
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
                            <button  className="rounded-pill">Add to cart</button>
                        
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
    paddingTop: '8%'
}

const imgStyle = {
    width: '16rem',
    height: '22rem',
    
    marginLeft: '1rem' as const
}

export default BookPage;
