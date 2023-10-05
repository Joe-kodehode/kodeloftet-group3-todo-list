// Global variables
const inputElement = document.getElementById("task-input");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

// eventlistener to listen for button click and run addTask function
addTaskButton.addEventListener("click", addTask);

// function to create and append tasks to the DOM
function addTask() {
  const task = inputElement.value;

  //   creating li
  const listItem = document.createElement("li");
  //   giving li a class
  listItem.className = "task-list-item";
  // creating p
  const textElement = document.createElement("p");
  // giving p the text content from our input
  textElement.textContent = task;

  //   appending li & p
  listItem.appendChild(textElement);
  taskList.appendChild(listItem);

  //   delete button (creating, giving text, event listener, appending)
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);
}
