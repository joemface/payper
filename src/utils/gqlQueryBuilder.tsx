export interface IIndexable {
    [key: string]: any;
}

const queryArgs: IIndexable = {
    bookByTitle: (queryValue:string):string => `(title:"${queryValue}")`,
    bookBySubtitle: (queryValue:string):string => `(subtitle:"${queryValue}")`,
    bookByAuthor: (queryValue:string):string => `(author:"${queryValue}")`,
    bookByIsbn: (queryValue:string):string => `(isbn:${queryValue})`
}

export default queryArgs;