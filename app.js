const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const clearButton = document.getElementById('clearButton');
var listElements = window.localStorage.getItem('tasks');
var toDoList = document.getElementById("toDoList");
var listElement = document.createElement("li");


if (listElements !== null){
	let tasks = JSON.parse(listElements);
	for(let i = 0; i < tasks.length; i++ ) {
		let taskNumber = i+1;
		toDoList = document.getElementById("toDoList");
		listElement = document.createElement("li");
		listElement.innerHTML = "Task number " + taskNumber;
		toDoList.appendChild(listElement);
	}
}


function addTask(){
		listElements = window.localStorage.getItem('tasks');
		toDoList = document.getElementById("toDoList");
		listElement = document.createElement("li");
		if (listElements === null) {
			let tasks = [];
			tasks.push("Task number 1");
			localStorage.setItem("tasks", JSON.stringify(tasks));
			listElement.innerHTML = "Task number 1";
			toDoList.appendChild(listElement);
		} else {
			console.log('aaa')
			listElements = window.localStorage.getItem('tasks');
			let tasks = JSON.parse(listElements);
			let taskNumber = tasks.length;
			taskNumber++;
			tasks.push("Task number "+ taskNumber);
			localStorage.setItem("tasks", JSON.stringify(tasks));
			listElement.innerHTML = "Task number "+ taskNumber;
			toDoList.appendChild(listElement);
		}
		
		
}

function deleteTask(){
	const lastChild = document.getElementById("toDoList").lastChild;
	let tasks = JSON.parse(window.localStorage.getItem('tasks'));
	tasks.splice(tasks.length -1, 1);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	lastChild.remove();
}

function clear(){
	const toDoList = document.getElementById("toDoList");
	let child = toDoList.lastElementChild;  
        while (child) { 
            toDoList.removeChild(child); 
            child = toDoList.lastElementChild; 
        }
	localStorage.clear();
}


addButton.addEventListener("click", addTask); 
deleteButton.addEventListener("click", deleteTask);
clearButton.addEventListener("click", clear);