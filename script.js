const shelf = document.querySelector('#shelf');
const header = document.querySelector('#header');
const headerButton = document.querySelector('#header-button');

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

function buildBookOnShelf(book){
    let bk = document.createElement('div');
    bk.classList.add("book");

    let title = document.createElement('p');
    title.textContent = `\"${book.title}\"`;
    bk.appendChild(title);

    let author = document.createElement('p');
    author.textContent = `By: ${book.author}`;
    bk.appendChild(author);

    shelf.appendChild(bk);
}

// Placeholders
addBookToLibrary("Dune", "Frank Herbert", 1000, false);
addBookToLibrary("Twin Towers", "J.R.R. Tolkien", 1000, false);
addBookToLibrary("Naruto vol. 1", "Masashi Kishimoto", 300, true);
addBookToLibrary("Percy Jackson and the Lightning Thief", "Rick Riordan", 300, true);
addBookToLibrary("Star Wars: Boba Fett vols. 1-6", "Terry Bisson(1-2) and Elizabeth Hand(3-6)", 600, true);
addBookToLibrary("American Gods", "Neil Gaiman", 400, false);
addBookToLibrary("The Mystery of Edwin Drood", "Charles Dickens", 218, false);
addBookToLibrary("Encyclopedia Brown and the Case of the Secret Pitch", "Donald J. Sobol", 96, false);
addBookToLibrary("Alex Rider: Stormbreaker", "Anthony Horowitz", 304, false);

function fillShelf(){
    myLibrary.forEach((book) => {
        buildBookOnShelf(book);
    });
}

fillShelf();

// INPUT
let formOpen = false;
function toggleForm(){
    if(!formOpen){
        let form = document.createElement('div');
        form.id = "book-input";

        let titleLabel = document.createElement('p');
        titleLabel.textContent = "TITLE:";
        form.appendChild(titleLabel);

        let title = document.createElement('input');
        title.type = "text";
        form.appendChild(title);

        let authorLabel = document.createElement('p');
        authorLabel.textContent = "AUTHOR:";
        form.appendChild(authorLabel);

        let author = document.createElement('input');
        author.type = "text";
        form.appendChild(author);

        let blankSpace = document.createElement('p');
        blankSpace.textContent = "";
        form.append(blankSpace);

        let submit = document.createElement('input');
        submit.type = "button";
        submit.value = "ADD BOOK";
        submit.onclick = () =>{
            toggleForm();
            submitBook();
        };
        form.appendChild(submit);

        header.appendChild(form);

        headerButton.value = "Close";
    } else {
        header.removeChild(header.lastChild);

        headerButton.value = "+ Add a Book";
    }

    formOpen = !formOpen;
}

function submitBook(){
    alert("epic");
}