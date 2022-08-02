class book{
    constructor(title = '',description = '',author = '', id = ''){
        this.title = title;
        this.description = description;
        this.author = author;
        this.id = id;
    }
}

class library{
    constructor(books = []){
        this.books = books;
    }
    getBooks(){
        return this.books;
    };
    addBook(bookInfo){
        const newBook = new book(bookInfo);
        this.books.push(newBook);
        return newBook
    };
    removeBookById(id){
        this.books.splice(id,1);
    };
    getBookById(id){
        for(var i= 0 ; i < this.books.length - 1; i++){
            if(this.books[i].id === id){
                return this.books[i]
            }
        };
    };
    updateBookById(id,info){
        const newBook = this.books.map( book =>{
            if(this.books.id === id){
                this.books.title = info.title;
                this.books.description = info.description;
                this.books.author = info.author;
            }
        })
        return newBook;
    };

}