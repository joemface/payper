import React, { Component } from 'react'
import Book from '../models/Book';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import '../styles/App.css';

interface Props extends RouteComponentProps<any> {
    addBook: (book: Book) => void
};
type State = {
    title?: string,
    subtitle?: string,
    author?: string,
    price?: number,
    isbn?: number,
    copies?: number,
    img?: string
}


export class AddBook extends Component<Props, State> {

    state: State = {
        title: "",
        subtitle: "",
        author: "",
        price: 0,
        isbn: 0,
        copies: 0,
        img: "https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057901_1280.png"
    }

    handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        this.props.addBook(
            new Book(
                this.state.title,
                this.state.subtitle,
                this.state.author,
                this.state.price,
                this.state.isbn,
                this.state.copies,
                this.state.img
            )
        );
        
        const requestOptions={
            method: 'POST',            
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        };
        
        
        fetch('http://localhost:8081/create-book', requestOptions);
            this.clearForm();
            this.props.history.push("/");
                   
      
    }

    clearForm = () => {
        this.setState({
            title: "",
            subtitle: "",
            author: "",
            price: 0,
            isbn: 0,
            copies: 0,
            img: ""
        });
    }


    handleChange = (event: React.SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (

            <div id="add-book" className="add-book">
                <h1 id="book-header">Add A Book</h1>

                <div className="col-container">
                
                    <form id="bookForm" onSubmit={this.handleSubmit}>
                    
                        <div className="col-mid-6">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subtitle">Subtitle</label>
                                <input type="text" name="subtitle" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input type="text" name="author" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="number" step="0.01" name="price" className="form-control" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div id="col-2" className="col-mid-6">
                            <div className="form-group">
                                <label htmlFor="isbn">ISBN</label>
                                <input type="number" name="isbn" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="copies">Copies</label>
                                <input type="number" name="copies" className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                <input type="text" id="img" name="img" className="form-control" onChange={this.handleChange} />
                            </div>

                            <div id="submitBtn" className="form-group">
                           <br/>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>


                    </form>

                </div>
            </div>

        )
    }
}

export default withRouter(AddBook);
