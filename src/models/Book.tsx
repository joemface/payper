

class Book {
    constructor(
        public title?: string, 
        public subtitle?: string, 
        public author?: string, 
        public price?: number,
        public isbn?: string,
        public copies?: number,
        public img?: string,
        public cart?: false,
        public quantity?:number
        ) {
        
    }
}

export default Book