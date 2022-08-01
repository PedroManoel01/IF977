class book{
    constructor(title = '',description = '',author = '', id = ''){
        this.title = title;
        this.description = description;
        this.author = author;
        this.id = id
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