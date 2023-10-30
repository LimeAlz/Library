const button = document.querySelector("#addbook");
const table = document.querySelector(".table");
const headerRow = document.querySelector(".header-row")
const showbutton = document.querySelector("#showform");
const formName = document.querySelector("#bookname")
const formAuthor = document.querySelector("#author")
const formPages = document.querySelector("#pages");
const formHaveRead = document.querySelector('#haveRead') ;
const form = document.querySelector(".addbook");

const myLibrary = [{ name: "Night is Short Walk on Girl", author: "Tomihiko Morimi", pages: 200, haveRead: true }, { name: "Tatami Galaxy", author: "Tomihiko Morimi", pages: 200, haveRead: false }];

function Book(name,author,pages,haveRead) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages =  pages;
  this.haveRead = haveRead;
  
}

function addBookToLibrary(book) {
  // do stuff here
  const newRow = document.createElement('tr');
  const nameData = document.createElement('td');
  nameData.textContent = book.name;

  const authorData = document.createElement('td');
  authorData.textContent = book.author;

  const pageData = document.createElement('td');
  pageData.textContent = book.pages;

  const haveReadData = document.createElement('td');
  haveReadData.classList.add('read');
  haveReadData.textContent = book.haveRead;

  const haveFinished = document.createElement('td');
  const finished =  document.createElement('button');
  finished.textContent = "Finished";
  finished.classList.add("finished")
  haveFinished.appendChild(finished);


  newRow.appendChild(nameData);
  newRow.appendChild(authorData);
  newRow.appendChild(pageData);
  newRow.appendChild(haveReadData);
  newRow.appendChild(haveFinished);

  table.appendChild(newRow);
}

showbutton.addEventListener('click',
  function () {
    form.classList.toggle("hidden")
  }
)


for (let i=0; i< myLibrary.length ;i++){
  addBookToLibrary(myLibrary[i]);
}

button.addEventListener('click', (e)=>{

  e.preventDefault();
  let tempo = false;
  if (formHaveRead.checked){
    tempo = true;
  }
  let tempbook = new Book(formName.value, formAuthor.value, formPages.value,tempo)
  myLibrary.push(tempbook);
  addBookToLibrary(tempbook);
  console.log(myLibrary);
  formName.value = "", formAuthor.value = "" , formPages.value = "", formHaveRead.value="";
}
  
)

// // const finishButton = document.querySelector('.finished');
// finished.addEventListener('click',(e)=>{
//     e.preventDefault();
//     if (haveReadData.textContent === 'true'){
//       haveReadData.textContent  = false;
//     }
//     else{
//       haveReadData.textContent  = true;
//     }
// }
// )

table.addEventListener('click', (e) => {
  if (e.target.classList.contains('finished')) {
    e.preventDefault();
    const clickedButton = e.target;
    const row = clickedButton.closest('tr'); // Find the parent row of the clicked button
    const haveReadData = row.querySelector('.read'); // Find the corresponding haveReadData cell in the same row

    if (haveReadData.textContent === "true") {
      haveReadData.textContent = "false";
    } else {
      haveReadData.textContent = "true";
    }
  }
});
