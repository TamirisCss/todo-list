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

//adicionar event no botao remover que acha e remove o item do array (e atualizar a tela)
let storage = window.localStorage.getItem("todos");
// console.log(storage)
let todos;
if(storage === null) {
    todos = [];
}else {
    todos = JSON.parse(storage);
}
updateDisplay();

//ADDING NEW TO DO
function addTodo(event) {
    event.preventDefault(); //browser don't reload. Faz o item li aparecer

    let object = {
        todo: todoInput.value, 
        completed: false
    }
    todos.push(object);
    todoInput.value = "";

    window.localStorage.setItem('todos', JSON.stringify(todos));
    updateDisplay();
}

//Displayy new Li in the browser
function updateDisplay() {
    todoListUl.innerHTML = "";
    todos.forEach(element => {
        // todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-div");
        //checkbox 
        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox");
        checkbox.type = "checkbox";
        if(element.completed) { // true or false
            checkbox.checked = true
            todoDiv.classList.add("completed");
        }
        //EVENT LISTENERS
        checkbox.addEventListener("click", completed);

        //todo li
        const newTodoLi = document.createElement("li");
        newTodoLi.classList.add("todo-item");
        //trash icon
        const trashIcon = document.createElement("a");
        trashIcon.innerHTML = `<i class="fas fa-trash" data="${element}"></i>`;
        trashIcon.classList.add("trash-icon");

        //EVENT LISTENERS
        trashIcon.addEventListener("click", removeLocalStorage);
        
        todoListUl.appendChild(todoDiv);
        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(newTodoLi);
        todoDiv.appendChild(trashIcon);
        
        newTodoLi.innerHTML = element.todo;
    });
}

//Remove item from LocalStorage
function removeLocalStorage(event) {
    //obtains the div of the clicked trash icon
    const div = event.target.parentElement.parentElement;
    //obtains the index of the div inside of the UL
    const index = Array.prototype.indexOf.call(todoListUl.children, div);
    //removes 1 item on the given index on the todos array
    todos.splice(index, 1);
    //updates the localstorage with the current value of the todos array
    window.localStorage.setItem('todos', JSON.stringify(todos));
    //updates the dom based on the current value of the todos array
    updateDisplay();
}

// Check if todo is completed
function completed(event) {
    const div = event.target.parentElement;
    const index = Array.prototype.indexOf.call(todoListUl.children, div);
    const item = todos[index];
    if(item.completed) {
        item.completed = false;
    }else {
        item.completed = true;
    }
    todos[index] = item;
    window.localStorage.setItem('todos', JSON.stringify(todos));
    updateDisplay();
}
