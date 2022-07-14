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
    return `${this.title}, by ${this.author}`;
};

// Management
function addBookToLibrary(title, author, numPages, read){
    let newBook = new Book(title, author, numPages, read);

    myLibrary.push(newBook);
    buildBookOnShelf(newBook);
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

    let pages = document.createElement('p');
    pages.textContent = `(${book.numPages} pages)`;
    pages.style.fontSize = "0.9rem";
    bk.appendChild(pages);

    let btnHolder = document.createElement('div');
    btnHolder.classList = "book-btn-holder";

    // READ ICON
    let readDisplay = document.createElement('img')
    readDisplay.style.width = "40px";
    readDisplay.style.height = "40px";

    readDisplay.src = book.read ? "./images/checkmark-book.svg" : "./images/remove-book.svg";

    readDisplay.classList = book.read ? "read-book-icon" : "unread-book-icon";

    readDisplay.addEventListener('click', () => {
        let index = myLibrary.indexOf(book);
        let readStatus = !myLibrary[index].read;
        myLibrary[index].read = readStatus;

        readDisplay.src = readStatus ? "./images/checkmark-book.svg" : "./images/remove-book.svg";

        readDisplay.classList = readStatus ? "read-book-icon" : "unread-book-icon";
    });

    btnHolder.appendChild(readDisplay);

    // DELETE BUTTON
    let deleteButton = document.createElement('img')
    deleteButton.style.width = "40px";
    deleteButton.style.height = "40px";
    deleteButton.src = "./images/delete.svg"

    deleteButton.addEventListener('click', () => {
        let index = myLibrary.indexOf(book);
        if(index > -1){
            bk.parentElement.removeChild(bk);
            myLibrary.splice(index, 1);
        }
    });
    btnHolder.appendChild(deleteButton);

    bk.append(btnHolder);

    // shelf.appendChild(bk);
    shelf.insertAdjacentElement('afterbegin', bk);
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

// INPUT
const form = document.getElementsByTagName('form')[0];

const newTitle = document.getElementById('new-title');
const titleError = document.querySelector('#new-title + span.error');

const newAuthor = document.getElementById('new-author');
const authorError = document.querySelector('#new-title + span.error');

const newPages = document.getElementById('new-pages');
const pagesError = document.querySelector('#new-title + span.error');

function showError(input, errorDisplay) {
    if (input.validity.valueMissing) {
        errorDisplay.textContent = "You need to enter something at least.";
    } else if (input.validity.typeMismatch) {
        errorDisplay.textContent = "Input does not match pattern.";
    } else if (input.validity.tooShort) {
        errorDisplay.textContent = `Email should be at least ${input.minLength}`;
    } else {
        console.log(input.validity);
    }

    errorDisplay.classList.add('active');
}

let formOpen = false;
function toggleForm(){
    if(!formOpen){
        document.getElementById('form-holder').style.height = "100%";
        headerButton.value = "Close";
    } else {
        document.getElementById('form-holder').style.height = "0";
        headerButton.value = "+ Add a Book";
    }

    formOpen = !formOpen;
}

function submitBook(){
    let title = document.getElementById("new-title").value;
    let author = document.getElementById("new-author").value;
    let pages = document.getElementById("new-pages").value;
    let read = document.getElementById("new-read").checked;
    console.log('a');

    if(title.length > 0 && author.length > 0){
        alert(`${title}, by ${author}`);
        // toggleForm();
        // addBookToLibrary(title, author, pages, read);
    }
}