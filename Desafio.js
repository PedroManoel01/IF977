class book{
    constructor(title = '',description = '',author = '', id = ''){
        this.title = title;
        this.description = description;
        this.author = author;
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
    };
    removeBookById();
    getBookById();
    updateBookById();

}