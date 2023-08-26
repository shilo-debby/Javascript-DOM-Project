// Detele buttons events
const list= document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className=='delete') {
        const li = e.target.parentNode;
        li.parentNode.removeChild(li);
    }
})