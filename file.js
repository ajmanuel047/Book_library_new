const myLibrary = [];
const addBook = document.querySelector('.add_book > button');
const form = document.querySelector('form');
const cardContainer = document.querySelector('.cards_container');
const containerTitle = document.querySelector('h3');
const submitButton = document.querySelector('button[type=submit]')

submitButton.addEventListener('click', function(event){
    const div = document.createElement('div');
    div.classList.add('card')
    cardContainer.appendChild(div)
    event.preventDefault();

})

addBook.addEventListener('click', function(){
    addBook.remove();
    form.style.display = 'flex';
    containerTitle.remove();
})

cardContainer.addEventListener('click', function () {
    containerTitle.remove();
    addBook.remove();
    form.style.display = 'flex';
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



