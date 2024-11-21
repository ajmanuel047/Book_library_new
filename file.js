const myLibrary = [];
const addBook = document.querySelector('.add_book');
const form = document.querySelector('form')

addBook.addEventListener('click', function(){
    addBook.remove()
    form.style.display = 'flex'
})


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary('harry', 'rowling', 345, 'yes')
addBookToLibrary('Ring', 'me', 24, 'no')



