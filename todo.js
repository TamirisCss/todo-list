const today = new Date();

const weekDay = today.toLocaleString("default", { weekday: "long" }); 

const month = today.toLocaleString('default', { month: 'short' });
const day = today.getDate();
const year = today.getFullYear();

const hour = today.getHours();
const minutes = today.getMinutes();

const date = `${month} ${day}, ${year}`; 
const time =  `${hour}:${minutes}`;    

const currentWeekDay = document.querySelector(".current-week-day");
const currentDate = document.querySelector(".current-date");
const currentTime = document.querySelector(".current-time");

currentWeekDay.innerHTML = weekDay;
currentDate.innerHTML = date;
currentTime.innerHTML = time;

//
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoListUl = document.querySelector(".todo-list-ul");

//EVENT LISTENERS
todoBtn.addEventListener("click", addTodo);

//criar um array pra guardar cada todo e se esta completo ou nao (boolean)
//no addTodo so adicionar no array
//criar um metodo que pega tudo que esta no array e mostra na tela (cria o html)
//chamar esse metodo que atualiza a tela ao abrir a pagina e dentro do metodo addTodo
//adicionar event no botao remover que acha e remove o item do array (e atualizar a tela)
let todoList = window.localStorage.getItem("todos");
let todos;
if(todoList === null) {
    todos = [];
}else {
    todos = JSON.parse(todoList);
}

//ADDING NEW TO DO
function addTodo(event) {
    event.preventDefault(); //browser don't reload. Faz o item li aparecer

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    //checkbox 
    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";
    //todo li
    const newTodoLi = document.createElement("li");
    newTodoLi.classList.add("todo-item");
    //trash icon
    const trashIcon = document.createElement("a");
    trashIcon.innerHTML = '<i class="fas fa-trash"></i>';
    trashIcon.classList.add("trash-icon");

    todoListUl.appendChild(todoDiv);
    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(newTodoLi);
    todoDiv.appendChild(trashIcon);
    
    newTodoLi.innerText = todoInput.value; //display new todo 

    todoInput.value = "";
}
