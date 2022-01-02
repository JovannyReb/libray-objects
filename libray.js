let myLibray = [];

const form = document.querySelector('#form');

function getInfo(objEvent) {
    objEvent.preventDefault()

    // Getting the values
    let title = document.querySelector('#title').value
    console.log(title)
    let author = document.querySelector('#author').value
    console.log(author)
    let pages = document.querySelector('#pages').value
    console.log(pages)


    addBookToLibrary(newBook(title,author,pages))

    console.table(myLibray)


}

form.addEventListener('submit', getInfo)

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(obj) {
    myLibray.push(obj)
}

function newBook(title,author,pages) {
    return new Book(title,author,pages)
}

function librayInventory(libray) {
    libray.forEach((book) => {
        for (let property in book) {
            console.log(`${property}: ${book[property]}`);
        }
    })
}

librayInventory(myLibray)




