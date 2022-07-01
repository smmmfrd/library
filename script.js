var myLibrary = [];

function Book(author, title, numPages, read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

// Prototype
Book.prototype.logLine = function() {
    return `${this.title}, by ${this.author}`
};

// Management
function addBookToLibrary(author, title, numPages, read){
    let newBook = new Book(author, title, numPages, read);

    myLibrary.push(newBook);
}

addBookToLibrary("Frank Herbert", "Dune", 1000, false);
addBookToLibrary("J.R.R. Tolkien", "Twin Towers", 1000, false);

function logLibraries(){
    myLibrary.forEach((book) => {
        console.log(book.logLine());
    });
}

logLibraries();