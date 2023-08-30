//Detele buttons events
const list= document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className=='delete') {
        const li = e.target.parentNode;
        li.parentNode.removeChild(li);
    }
})

// Adding a book
const addForm=document.forms['add-book'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = document.querySelector('#add-book input').value;
    // create elements
    const li =document.createElement('li');
    const bookName=document.createElement('span');
    const deleteBtn=document.createElement('span');
    //giving value to the elements
    bookName.textContent=value;
    deleteBtn.textContent='delete';
    // adding classes and style
    bookName.classList.add('name');
    deleteBtn.classList.add('delete')
    // appending child
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

})

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//custom search Filter
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';  
        }
    });
});


