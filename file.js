const myLibrary = [];
const addBook = document.querySelector('.add_book > button');
const form = document.querySelector('form');
const cardContainer = document.querySelector('.cards_container');
const containerTitle = document.querySelector('h3');
const submitButton = document.querySelector('button[type=submit]')
const containerBorder = document.querySelector('.container_border')
const titleOfBook = document.querySelector('#title');
const authorOfBook = document.querySelector('#author')
const numberOfPages = document.querySelector('#pages')

let bookCompletedButtonClicked = 'no'

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

Book.prototype.readStatus = function (){
    if(bookCompletedButtonClicked == 'yes'){
        return 'yes'
    }else if(bookCompletedButtonClicked == 'no'){
        return 'no'
    }
}

let book = undefined

function addBookToLibrary(title, author, pages, read){
    book = new Book(title, author, pages, read)
    myLibrary.push(book)
    return book.readStatus()
}

function displayBook (array) {
    let obj;
    for(let prop in array){
         obj = array[prop]
    }
    return obj
}

function displayNewTitle(){
    if(!(document.querySelector('h1.newTitle'))){
        const newTitle = document.createElement('h1')
        newTitle.className = 'newTitle'
        newTitle.textContent = 'Fill The Form To Add Your Books'
        containerBorder.appendChild(newTitle);
} 
}

submitButton.addEventListener('click', function(event){
    addBookToLibrary(titleOfBook.value, authorOfBook.value, numberOfPages.value, '')
   
    if(titleOfBook.value != '' && authorOfBook.value != '' & numberOfPages.value != ''){
    const div = document.createElement('div');
    div.classList.add('card');
    cardContainer.appendChild(div);
    event.preventDefault();
    containerBorder.remove();
    cardContainer.classList.add('new_card_container');
    cardContainer.classList.remove('container_border')
    
    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Title : ${displayBook(myLibrary).title}`;

    const author = document.createElement('p');
    author.textContent = `Author : ${displayBook(myLibrary).author}`

    const pages = document.createElement('p');
    pages.textContent = `Number Of Pages : ${displayBook(myLibrary).pages}`;

    const bookComplete = document.createElement('p');
    bookComplete.textContent =  `Completed : ${displayBook(myLibrary).read}`
    
    const deleteBook = document.createElement('button')
    deleteBook.textContent = 'Remove Book'
    deleteBook.className = 'deleteBtn'

    const bookCompleted = document.createElement('button');
    bookCompleted.textContent = 'Completed?';
    
    bookCompleted.addEventListener('click', function(){
        
        if(book.readStatus() == 'yes'){
            bookCompleted.textContent = 'Not Completed'
            bookComplete.textContent =  `Completed : No`
            bookCompletedButtonClicked = 'no'
        }
        else if(book.readStatus() == 'no'){
            bookCompleted.textContent = 'Completed'
            bookComplete.textContent =  `Completed : Yes`
            bookCompletedButtonClicked = 'yes'

        }
        
    })

    titleOfBook.value = '';
    authorOfBook.value = '';
    numberOfPages.value = '';

    const deleteButton = document.querySelector('.deleteBtn');
    deleteBook.addEventListener('click', function(){
    div.remove()
    myLibrary.pop()
    console.log(myLibrary)
    console.log(myLibrary.length)

    if(myLibrary.length == 0){
        cardContainer.classList.remove('new_card_container')
        document.body.appendChild(containerBorder)
        containerBorder.style.position = 'relative'
        containerBorder.style.top = '-15px'
        displayNewTitle()
}  
})    
    div.appendChild(bookTitle);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(bookComplete);
    div.appendChild(deleteBook);
    div.appendChild(bookCompleted);
}
    event.preventDefault();
})

addBook.addEventListener('click', function(){
    addBook.remove();
    form.style.display = 'flex';
    containerTitle.remove();
    displayNewTitle()
})

containerBorder.addEventListener('click', function(){
    containerTitle.remove();
    addBook.remove();    
    form.style.display = 'flex';   
    displayNewTitle()
})


console.log(myLibrary)
