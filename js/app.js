

// 1: DOM - HTML melumatlarimizi cagiraq


// const cardBodyOne = document.querySelectorAll(".card-body")[0];
// const cardBodyTwo = document.querySelectorAll(".card-body")[1];
// const form = document.querySelector("#todo-form");
// const addInput = document.querySelector("#todo-add-input");
// const todoList = document.querySelector(".list-group");
// const allDeleteButton = document.querySelector("#clear-todos");

// ==============================================


// function eventListener(){
//   form.addEventListener("submit", addTodo)
// }

// eventListener();


// todo submit function  - todo elave etmek

// function addTodo(e){
//    const addInputValue =  addInput.value.trim();
//    if (addInputValue!="") {
//     const listItem = document.createElement("li");

//     listItem.className = "list-group-item d-flex justify-content-between";
//     const link = document.createElement("a");
//     link.href = "#";
//     link.className = "delete-item";
//     link.innerHTML = " <i style='color: red;' class = 'fa fa-remove'></i>"
//     listItem.appendChild(document.createTextNode(addInputValue));
    
//     listItem.appendChild(link);
    
//     todoList.appendChild(listItem);
//     addInput.value = "";
//     messageContent("success", "todo todo-liste elave olundu")
//    }
//    else{
//       messageContent("danger", "zehmet olsada olmasada boslugu doldur")
//    }

 
//    e.preventDefault();
// }

// function deleteTodo(e){
   

//     if (e.target.className === "fa fa-remove") {
//        e.target.parentElement.parentElement.remove();
//        messageContent("danger", "todo silindi")
//     }
//  }
 
 
//  function deleteAllTodo(){
//    //  todoList.innerHTML = ""
 
//    if (confirm("butun todolari silmek isteyirsiniz?")) {
//      while (todoList.firstElementChild !=null) {
//        todoList.firstElementChild.remove();
       
//      }
//      messageContent("danger", "butun todolar silindi")
 
//    }
//  }
 
//  function findTodo(e){
//    const filterText = e.target.value.toLowerCase();
   
//    const listItems = document.querySelectorAll(".list-group-item");
//    listItems.forEach(item => {
   
//      const text = item.textContent.toLowerCase()
//        if (text.indexOf(filterText) === -1) {
//           item.setAttribute("style", "display : none !important")
         
//        }
//        else{
//          item.setAttribute("style", "display : flex !important")
//        }
//    });
//  }

// function messageContent(type, text){
//     const message = document.createElement("div");
//     message.className = `alert alert-${type}`
//     message.textContent = text;
//     cardBodyOne.appendChild(message);
//     setTimeout(()=>{
//         message.remove();
//     }, 2000);
//     console.log(message);
// }

const cardBodyOne = document.querySelectorAll('.card-body')[0]
const cardBodyTwo = document.querySelectorAll('.card-body')[1]
const form = document.querySelector('#todo-form')
const addInput = document.querySelector('#todo-add-input')
const todoList = document.querySelector('.list-group')
const clearBtn = document.querySelector('#clear-todos')
const filter = document.querySelector('#filter')
function eventListener(){
    form.addEventListener('submit', addTodo)
    cardBodyTwo.addEventListener('click', deleteTodo)
    clearBtn.addEventListener('click', deleteAllTodo )
    filter.addEventListener('keyup', findTodo)
}
eventListener()

function addTodo(e){
    const addInputValue = addInput.value.trim()
    if (addInputValue!='') {
        var listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between";
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'delete-item';
        link.innerHTML = "<i style= ' color: red;' class = 'fa fa-remove'></i>"
        listItem.appendChild(document.createTextNode(addInputValue))
        listItem.appendChild(link);
        todoList.appendChild(listItem);
        addInput.value= ''
        messageContent('success', 'todo list elave edildi')

    }
    else{
        messageContent('warning', 'zehmet olmasa todo list elave edin')
    }
    e.preventDefault();
    console.log(todoList);
}



function deleteTodo(e){
    if(e.target.className === 'fa fa-remove'){
        e.target.parentElement.parentElement.remove()
        messageContent('danger', 'todo silindi')
    }
}

function deleteAllTodo(){
   if (confirm('butun todolari silmek isteyirsinizmi')) {
       while (todoList.firstElementChild !=null){
           todoList.firstElementChild.remove()
          
       }
       messageContent('danger', 'butun todolar silindi')
   }

}

function findTodo(e){
    const filterText = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(item =>{
       const text =  item.textContent.toLowerCase()
       if (text.indexOf(filterText) === -1) {
           item.setAttribute('style', 'display : none !important')
       }
       else{
           item.setAttribute('style', 'display : flex !important')
       }
    });
}

function messageContent (type, text){
    const message = document.createElement('div');
    message.className = `alert alert-${type}`;
    message.textContent = text;
    cardBodyOne.appendChild(message)
    setTimeout(() => {
        message.remove()
    }, 4000);
    
}







