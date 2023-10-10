// Global variables
const inputElement = document.getElementById("task-input");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

// eventlistener to listen for button click and run addTask function
addTaskButton.addEventListener("click", addTask);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// function to create and append tasks to the DOM
function addTask() {
  const task = inputElement.value;

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  inputElement.value = "";

  //   creating li
  const listItem = document.createElement("li");
  //   giving li a class
  listItem.className = "task-list-item";
  // creating p
  const textElement = document.createElement("p");
  // giving p the text content from our input
  textElement.textContent = task;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.addEventListener("change", function () {
    textElement.classList.toggle("checkbox-toggle");
  });

  //   appending checkbox, li & p
  listItem.appendChild(checkbox);
  listItem.appendChild(textElement);
  taskList.appendChild(listItem);

  //   delete button (creating, giving text, event listener, appending)
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
  deleteButton.className = "delete-button";
  listItem.appendChild(deleteButton);
}
