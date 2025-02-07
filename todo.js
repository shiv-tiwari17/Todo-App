let btn = document.querySelector('button');

let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let li = document.createElement('li')
    li.innerText = input.value
    console.log(input.value)
    input.value = ''
    ul.appendChild(li)
   

    let delBtn = document.createElement('button')
    btn.classList.add('delete')
    delBtn.innerText = 'delete';
    li.appendChild(delBtn);

})

ul.addEventListener('click', function(event){
    if (event.target.nodeName ='BUTTON') {
        let listName = event.target.parentElement;
        listName.remove();  
    }
   
})

// let delBtns = document.querySelectorAll('.delete');

// for( delBtn of delBtns) {

//     delBtn.addEventListener('click', function(){
//         // console.log("list was deleted")
//         let par = this.parentElement;
//         console.log(par)
//         par.remove()
//     })
  
// }
