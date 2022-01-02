let myLibray = [];

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(obj) {
    myLibray.push(obj)
}

function librayInventory(libray) {
    libray.forEach((book) => {
        for (let property in book) {
            console.log(`${property}: ${book[property]}`);
        }
    })
}

const harryPotter = new Book('Harry Potter', 'Some girl', 325);

const billy = new Book('billy', 'bob', 520);

const chrissy = new Book('chirrtsy tang', 'bobbt', 200);

addBookToLibrary(harryPotter)
addBookToLibrary(billy)
addBookToLibrary(chrissy)

librayInventory(myLibray)




