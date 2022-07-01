var myLibrary = [];

function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

// Prototype
Book.prototype.logLine = function() {
    return `${this.title}, by ${this.author}`
};

// Management
function addBookToLibrary(title, author, numPages, read){
    let newBook = new Book(title, author, numPages, read);

    myLibrary.push(newBook);
}

addBookToLibrary("Dune", "Frank Herbert", 1000, false);
addBookToLibrary("Twin Towers", "J.R.R. Tolkien", 1000, false);
addBookToLibrary("Naruto vol. 1", "Masashi Kishimoto", 300, true);
addBookToLibrary("Percy Jackson and the Lightning Thief", "Rick Riordan", 300, true);
addBookToLibrary("Star Wars: Boba Fett vols. 1-6", "Terry Bisson(1-2) and Elizabeth Hand(3-6)", 600, true);
addBookToLibrary("American Gods", "Neil Gaiman", 400, false);
addBookToLibrary("The Mystery of Edwin Drood", "Charles Dickens", 218, false);
addBookToLibrary("Encyclopedia Brown and the Case of the Secret Pitch", "Donald J. Sobol", 96, false);
addBookToLibrary("Alex Rider: Stormbreaker", "Anthony Horowitz", 304, false);

function logLibraries(){
    myLibrary.forEach((book) => {
        console.log(book.logLine());
    });
}

logLibraries();