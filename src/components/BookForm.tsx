import React, {useEffect, useState } from 'react'
import Book from '../models/Book';
import { withRouter } from 'react-router-dom';
import '../styles/App.css';




function BookForm(props: any) {

    const [title, setTitle] = useState(props.book.title);
    const [subtitle, setSubtitle] = useState(props.book.subtitle);
    const [author, setAuthor] = useState(props.book.author);
    const [price, setPrice] = useState(props.book.price);
    const [isbn, setIsbn] = useState(props.book.isbn);
    const [copies, setCopies] = useState(props.book.copies);
    const [img, setImg] = useState(props.book.img);
    const [cart, setCart] = useState();
    const [quantity, setQuantity] = useState(0);
    let [isValid, setIsValidForm] = useState(false);
    let [isDirty, setIsDirtyForm] = useState(false);
    useEffect(() =>{
        let validTitle = title ? true : false;
        let validSubtitle = subtitle ? true : false;
        let validAuthor = author ? true : false;
        let validPrice = price ? true : false;
        let validIsbn = isbn ? true : false;
        let validCopies = copies ? true : false;
        let validImg = img ? true : false;

        isValid = validTitle && validSubtitle && validAuthor && validPrice && validCopies && validIsbn && validImg;
        isDirty = validTitle || validSubtitle || validAuthor || validPrice || validCopies || validIsbn || validImg;
        setIsValidForm(isValid);
        setIsDirtyForm(isDirty);
    },[title, subtitle, author, price, isbn, copies, img]
    );


    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if(!isValid) return;

        let book = new Book(
            title,
            subtitle,
            author,
            price,
            isbn,
            copies,
            img,
            cart,
            quantity
        );
        props.submitForm(book);
    }




    return (

        <div id="add-book" className="container-fluid">
         <title>{props.title}</title>
            <h1 id="book-header">{props.title}</h1>

            <div className="col-container">

                <form id="bookForm" onSubmit={handleSubmit}>

                    <div className="col-mid-6">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" value={title} name="title" className="form-control" onChange={e =>setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subtitle">Subtitle</label>
                            <input type="text" value={subtitle} name="subtitle" className="form-control" onChange={e=>setSubtitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input type="text" value={author} name="author" className="form-control" onChange={e=>setAuthor(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="number" value={price} step="0.01" name="price" className="form-control" onChange={e=>setPrice(parseInt(e.target.value).toFixed(2))} />
                        </div>
                    </div>

                    <div id="col-2" className="col-mid-6">
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN</label>
                            <input type="text"  value={isbn} name="isbn" className="form-control" onChange={e=>setIsbn(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="copies">Copies</label>
                            <input type="number" value={copies} name="copies" className="form-control" onChange={e=>setCopies(parseInt(e.target.value))} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input type="text" id="img" value={img} name="img" className="form-control" onChange={e=>setImg(e.target.value)} />
                        </div>

                        <div id="submitBtn" className="form-group">
                            <br />
                            <button type="submit" disabled={!isValid} className="btn btn-success rounded-pill">Submit</button>
                        </div>
                    </div>

                </form>

            </div>
            <div>
                {(!isValid && isDirty)?
                <div id="errorMessage" style={{fontSize: '12px', color: 'red'}}>All fields must be filled out!</div>
                    :
                    <div id="blankError"></div>
            }
            </div>
        </div>

    )
}


export default withRouter(BookForm);
