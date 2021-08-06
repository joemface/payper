

class Book {
    constructor(
        public _id: string,
        public title?: string, 
        public subtitle?: string, 
        public author?: string, 
        public price?: number,
        public isbn?: string,
        public copies?: number,
        public img?: string
        ) {
        
    }
}

export default Book