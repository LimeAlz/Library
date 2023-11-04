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

function addBookToLibrary(book,i) {
  // do stuff here
  const newRow = document.createElement('tr');
  const nameData = document.createElement('td');
  nameData.setAttribute("data-number",i)
  nameData.textContent = book.name;

  const authorData = document.createElement('td');
  authorData.setAttribute("data-number",i)
  authorData.textContent = book.author;

  const pageData = document.createElement('td');
  pageData.setAttribute("data-number",i)
  pageData.textContent = book.pages;

  const haveReadData = document.createElement('td');
  haveReadData.setAttribute("data-number",i)
  haveReadData.classList.add('read');
  haveReadData.textContent = book.haveRead;

  const haveFinished = document.createElement('td');
  haveFinished.setAttribute("data-number",i)
  const finished =  document.createElement('button');
  finished.setAttribute("data-number",i)
  finished.textContent = "Finished";
  finished.classList.add("finished")
  haveFinished.appendChild(finished);

  const RemoveButton = document.createElement('td');
  RemoveButton.setAttribute("data-number",i)
  const removed =  document.createElement('button');
  removed.setAttribute("data-number",i)
  removed.textContent = "Remove Item";
  removed.classList.add("removed")
  RemoveButton.appendChild(removed);


  newRow.appendChild(nameData);
  newRow.appendChild(authorData);
  newRow.appendChild(pageData);
  newRow.appendChild(haveReadData);
  newRow.appendChild(haveFinished);
  newRow.appendChild(RemoveButton);

  table.appendChild(newRow);
}

showbutton.addEventListener('click',
  function () {
    form.classList.toggle("hidden")
  }
)


for (let i=0; i< myLibrary.length ;i++){
  addBookToLibrary(myLibrary[i],i);
}

button.addEventListener('click', (e)=>{

  e.preventDefault();
  let tempo = false;
  if (formHaveRead.checked){
    tempo = true;
  }
  let tempbook = new Book(formName.value, formAuthor.value, formPages.value,tempo)
  myLibrary.push(tempbook);
  addBookToLibrary(tempbook,myLibrary.findIndex(x=>x == tempbook));
  console.log(myLibrary);
  formName.value = "", formAuthor.value = "" , formPages.value = "", formHaveRead.value="";
}
  
)

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


const RemoveButton = document.querySelector(".removed");


table.addEventListener('click',(e)=>{
  if (e.target.classList.contains('removed')) {
    e.preventDefault();
    const clickedButton = e.target;
  
  const number = clickedButton.dataset.number;
  const elements = document.querySelectorAll(`[data-number='${number}']`);

  elements.forEach(element => {
    element.remove();
  });
  myLibrary.splice(number,number);
  console.log(myLibrary);


  }
})
