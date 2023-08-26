// Detele buttons events
const list= document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className=='delete') {
        const li = e.target.parentNode;
        li.parentNode.removeChild(li);
    }
})

// Adding a book
const addForm=document.forms['add-book'];

addForm.addEventListener('submit',function(e) {
    e.preventDefault();
    const value = document.querySelector('#add-book input').value;
    // create elements
    const li =document.createElement('li');
    const bookName=document.createElement('span');
    const deleteBtn=document.createElement('span');
    //giving value to the elements
    bookName.textContent=value;
    deleteBtn.textContent='delete';
    // appending child
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

