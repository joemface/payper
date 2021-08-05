import { withRouter } from 'react-router-dom';
import '../styles/App.css';
import { postBook } from '../api/Book';
import BookForm from './BookForm';



function CreateBook(props: any) {

    const submitForm = (book:any) =>{
        postBook(book)
        .then(props.history.push('/'));
    }
    
    return(
        <BookForm
        title="Add New Book"
        book={{}}
        submitForm={submitForm} />
    )

}


export default withRouter(CreateBook);
