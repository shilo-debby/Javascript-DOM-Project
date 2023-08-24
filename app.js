// const titles=document.getElementsByClassName('title');

// Array.from(titles).forEach(function(item){
//     console.log(item.innerHTML)
// })

// const wrap = document.querySelector('#book-list ul li:nth-child(2) .name');
// console.log(wrap.innerHTML);

// const firstList= document.querySelector('#book-list ul li');
// console.log(firstList);



const books=document.querySelectorAll('#book-list ul li .name');
Array.from(books).forEach(function(title){
    console.log(title.innerHTML);
})