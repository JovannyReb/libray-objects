let myLibray = [];

let headers = ['title', 'author', 'pages']

const form = document.querySelector('#form');
const mainTable = document.querySelector('#table')
let table = document.createElement('table');

function getInfo(objEvent) {
    objEvent.preventDefault()

    // Getting the values
    let title = document.querySelector('#title').value;
    console.log(title);
    let author = document.querySelector('#author').value;
    console.log(author);
    let pages = document.querySelector('#pages').value;
    console.log(pages);

    // Creating book object and adding it to the array 
    addBookToLibrary(BookFactory(title, author, pages));

    clearTable();

    tableHeading();
    tableData();

    // <div> <table> </table> </div>
    mainTable.appendChild(table)

    console.table(myLibray);

    clearValues();
}

form.addEventListener('submit', getInfo)


function tableHeading() {
        // creating table heading
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
}

function tableData() {
        // creating table data
        myLibray.forEach((book, index) => {
            let row = document.createElement('tr');
            // added a data-set id to keep track of every row created
            row.dataset.id = `${index}`
    
            // added a delete button to be generated
            let button = document.createElement('button')
            button.textContent = 'delete'
            button.addEventListener('click', deleteRow)
    
            // looping through each book values, creating a td and adding each value to each row
            Object.values(book).forEach(text => {
                let cell = document.createElement('td');
                let textNode = document.createTextNode(text);
        
                cell.appendChild(textNode);
                // <tr> <td> text node </td> <tr>
                row.appendChild(cell);
            })
            row.appendChild(button)
            table.appendChild(row)
        })
}


function deleteRow() {
    console.log(this.parentElement.dataset.id)
    let index = this.parentElement.dataset.id;
    myLibray.splice(index, 1);
    clearTable();
    tableHeading();
    tableData();
}

// Use of factory factory functions to create the books objects.
// Instead of having another funcion and have to use the 'new' keyword
function BookFactory(title,author,pages) {
    return { title, author, pages}
}

function addBookToLibrary(obj) {
    myLibray.push(obj)
}

function clearValues() {
    title.value = ''
    author.value = ''
    pages.value = ''
}

function clearTable() {
    table.innerHTML = ""
}





