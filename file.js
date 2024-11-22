const myLibrary = [];
const addBook = document.querySelector('.add_book > button');
const form = document.querySelector('form');
const cardContainer = document.querySelector('.cards_container');
const containerTitle = document.querySelector('h3');
const submitButton = document.querySelector('button[type=submit]')
const containerBorder = document.querySelector('.container_border')


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
console.log(myLibrary)
// addBookToLibrary('Ring', 'me', 24, 'no')


function displayBook (array) {
    for(let i = 0; i < array.length; i++){
        return array[i]
    }
}



submitButton.addEventListener('click', function(event){
    const div = document.createElement('div');
    div.classList.add('card');
    cardContainer.appendChild(div);
    event.preventDefault();
    containerBorder.remove();
    cardContainer.classList.add('new_card_container');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Book Title : ${displayBook(myLibrary).title}`;

    const author = document.createElement('p');
    author.textContent = `Author : ${displayBook(myLibrary).author}`

    const pages = document.createElement('p');
    pages.textContent = `Number Of Pages : ${displayBook(myLibrary).pages}`;

    const bookComplete = document.createElement('p');
    bookComplete.textContent =  `Completed : ${displayBook(myLibrary).read}`

    div.appendChild(bookTitle);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(bookComplete);
})

addBook.addEventListener('click', function(){
    addBook.remove();
    form.style.display = 'flex';
    containerTitle.remove();
    cardContainer.classList.add('new_card_container')
})

containerBorder.addEventListener('click', function(){
    containerTitle.remove();
    addBook.remove();    
    form.style.display = 'flex';
    cardContainer.classList.add('new_card_container')

})



