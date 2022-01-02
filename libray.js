let myLibray = [];

let headers = ['title', 'author', 'pages']

const form = document.querySelector('#form');
const mainTable = document.querySelector('#table')

function getInfo(objEvent) {
    objEvent.preventDefault()

    // creating table
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach((headerText) => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);

        header.appendChild(textNode);
        // <tr> <th> text node </th> <tr>
        headerRow.appendChild(header);
    });

    // <table> <tr> <th> textNode </th> </tr> </table>
    table.appendChild(headerRow);

    // <div> <table>
    mainTable.appendChild(table)


    // Getting the values
    let title = document.querySelector('#title').value;
    console.log(title);
    let author = document.querySelector('#author').value;
    console.log(author);
    let pages = document.querySelector('#pages').value;
    console.log(pages);


    addBookToLibrary(newBook(title,author,pages));

    console.table(myLibray);

    clearValues();

}

form.addEventListener('submit', getInfo)

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function clearValues() {
    title.value = ''
    author.value = ''
    pages.value = ''
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





