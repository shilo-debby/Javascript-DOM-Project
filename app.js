// const titles=document.getElementsByClassName('title');

// Array.from(titles).forEach(function(item){
//     console.log(item.innerHTML)
// })

// const wrap = document.querySelector('#book-list ul li:nth-child(2) .name');
// console.log(wrap.innerHTML);

// const firstList= document.querySelector('#book-list ul li');
// console.log(firstList);



// const books=document.querySelectorAll('#book-list ul li .name');
// Array.from(books).forEach(function(title){
//     console.log(title.innerHTML);
// })
// Array.from(books).forEach(function(book){
//     book.textContent+='(booktitle)';
// });
// const booklist=document.querySelector('#book-list');
// booklist.innerHTML='<h2>Books and more books...</h2>';
// booklist.innerHTML+='<p>This is how you add HTML</p>';
// console.log(booklist)
            // traversing the DOM part 1

const booklist= document.querySelector('#book-list');

console.log('the parent node is:',booklist.parentNode);
console.log('the parent element is:',booklist.parentElement);
console.log(booklist.children);

          // traversing the DOM sibling part 2
const bookList=document.querySelector('#book-list')
 console.log('book-list next sibling is:',bookList.nextSibling);
console.log('book-list next element sibling is:',bookList.nextElementSibling);


console.log('book-list previous sibling is:', bookList.previousSibling);
console.log('book-list previous element sibling is:',bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML+='<br/> Too cool for everyone else!';

