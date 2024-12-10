const myLibrary = []

function Book(title, author, pages, read) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read;

}


function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead)
    myLibrary.push(newBook);
}

addBookToLibrary("Hello", "World", 322, true);
addBookToLibrary("Wordl", "Thompson", 242, true);
addBookToLibrary("Hola", "Brian", 121, true);

//Dialog box
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

//opens the dialog box 
showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

//prevent submit button from submittin to the server yb default
const submitButton = document.querySelector("#formSubmit");
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
})


//looping through each items to create a book card
myLibrary.forEach((book) => {
    bookCard(book);
})

//card view Each book
function bookCard(myLibrary) {
    const bookCardSection = document.querySelector(".bookCardSection");
    const bookCardDiv = document.createElement("div");
    bookCardDiv.classList.add("bookCard");
    bookCardDiv.innerHTML += 
    `
        <h2>Books</h2>
        <p>Book Name: ${myLibrary.bookTitle}</p>
        <p>Book Author: ${myLibrary.bookAuthor} </p>
        <p>Book Pages: ${myLibrary.bookPages}</p>
        <p>Book Read Status: ${myLibrary.bookRead}</p>
    `
    bookCardSection.appendChild(bookCardDiv);
}





