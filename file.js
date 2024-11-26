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

function displayBook (array) {
    let obj;
    for(let prop in array){
         obj = array[prop]
    }
    return obj
}
console.log(displayBook(myLibrary))


submitButton.addEventListener('click', function(event){
    addBookToLibrary(titleOfBook.value, authorOfBook.value, numberOfPages.value, 'yes')
    
    if(titleOfBook.value != '' && authorOfBook.value != '' & numberOfPages.value != ''){
    const div = document.createElement('div');
    div.classList.add('card');
    cardContainer.appendChild(div);
    event.preventDefault();
    containerBorder.remove();
    cardContainer.classList.add('new_card_container');
    cardContainer.classList.remove('container_border')
    // document.querySelector('cards_container h1').remove()


    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Book Title : ${displayBook(myLibrary).title}`;

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
    bookCompleted.textContent = 'Finished';


    titleOfBook.value = '';
    authorOfBook.value = '';
    numberOfPages.value = '';

    const deleteButton = document.querySelector('.deleteBtn');
    deleteBook.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'green'
    div.remove()
    myLibrary.pop()
    console.log(myLibrary)
    console.log(myLibrary.length)
    if(myLibrary.length == 0){
        // cardContainer.classList.add('new_card_container');
        // document.body.style.backgroundColor = 'pink'
        cardContainer.classList.remove('new_card_container')
        cardContainer.classList.add('container_border')
    
        // const newTitle = document.createElement('h1')
        // newTitle.className = 'newTitle'
        // newTitle.textContent = 'Fill The Form To Add Your Books'
        // cardContainer.appendChild(newTitle)
// after clicking addbook i see a bug border dotted line at the bottom of the page
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
    cardContainer.classList.add('new_card_container')
})

containerBorder.addEventListener('click', function(){
    containerTitle.remove();
    addBook.remove();    
    form.style.display = 'flex';
    cardContainer.classList.add('new_card_container')

})




// i was trying to make the form not to be empty
// after the final delete. You might want to leave that 
// for later

console.log(myLibrary)
