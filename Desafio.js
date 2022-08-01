class book{
    constructor(title = '',description = '',author = ''){
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class library{
    constructor(books = []){
        this.books = books;
    }

    addBook();
    getBooks();
    removeBookById();
    getBookById();
    updateBookById();

}