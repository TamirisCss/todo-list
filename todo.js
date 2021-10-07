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
const todoList = document.querySelector(".todo-list");

//EVENT LISTENERS
todoBtn.addEventListener("click", addTodo);

//ADDING NEW TO DO
function addTodo(event) {
    event.preventDefault(); //browser don't reload. Faz o item li aparecer

    //todo li
    const newTodoLi = document.createElement("li");
    newTodoLi.innerText = todoInput.value;
    todoList.appendChild(newTodoLi);
}
