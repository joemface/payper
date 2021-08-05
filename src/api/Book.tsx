import Book from '../models/Book';

export const getBooks = (): Promise<Book[]> => {
    return fetch('http://localhost:8080/')
        .then(res => res.json());
}

export const postBook = (book:Book): Promise<any> => {
    return fetch('http://localhost:8080/create-book',
        {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        }
    ).catch(err => console.error(err));
}

export const putBook = (book:Book) =>{
    return fetch('http://localhost:8080/edit-book',
        {
            method: 'PUT',
            
            headers: {'Content-Type': 'application/json'}
        }
    ).catch(err => console.error(err));
}