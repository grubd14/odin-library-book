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

//Dialog box
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

//opens the dialof box 
showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})


console.log(dialog)


