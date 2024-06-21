// this is new
// Simple to do list

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//Add new task to the list

function addTask() {
	const taskText = taskInput.value.trim();

	// make sure that the input is not empty

	if (taskText === "") {
		alert("Please enter a task");
		return;
	}

	// Create a new list item

	const listItem = document.createElement("li");
	listItem.className = "todo-item";
	listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

	// Add the new list item to the task list
	taskList.appendChild(listItem);

	// Clear the input field
	taskInput.value = "";
}

function deleteTask(button) {
	// Remove the parent list item
	const listItem = button.parentElement;
	taskList.removeChild(listItem);
}
