import { useParams } from 'react-router-dom';
import Book from '../models/Book';


export const getBooks = (): Promise<Book[]> => {
    return fetch('http://payper-1.us-east-1.elasticbeanstalk.com/books')
        .then(res => res.json());
}

export const postBook = (book: Book): Promise<any> => {
    return fetch('http://payper-1.us-east-1.elasticbeanstalk.com/books/book',
        {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        }
    ).catch(err => console.error(err));
}



export const putBook = (book:Book, isbn:string) => {
    return (
        fetch(`http://payper-1.us-east-1.elasticbeanstalk.com/books/book/${isbn}`,
            {
                method: 'PUT',
                body: JSON.stringify(book),
                headers: {
                    'Content-Type': 'application/json'
                }
                
            }
        )
    );
}