import { useParams } from 'react-router-dom';
import Book from '../models/Book';


export const getBooks = (): Promise<Book[]> => {
    return fetch('https://cors-everywhere.herokuapp.com/http://payper-env.eba-f4t3tdk2.us-east-1.elasticbeanstalk.com/books').then((res) =>
         res.json());
}

export const postBook = (book: Book): Promise<any> => {
    return fetch('https://cors-everywhere.herokuapp.com/http://payper-env.eba-f4t3tdk2.us-east-1.elasticbeanstalk.com/books/book',
        {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        }
    ).catch(err => console.error(err));
}



export const putBook = (book:Book, isbn:string) => {
    return (
        fetch(`https://cors-everywhere.herokuapp.com/http://payper-env.eba-f4t3tdk2.us-east-1.elasticbeanstalk.com/books/book/${isbn}`,
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


export function searchBooks(query:any) {
    return (
        fetch(`https://dev-bios-graphql-dot-tech-services-1000201953.uc.r.appspot.com/q?query=${encodeURIComponent(query)}`)
        .then(res=> res.json()
        )
    )
}