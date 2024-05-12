let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

function deleteTask(event) {
  event.target.parentNode.remove();
}

btn.addEventListener("click", function () {
  if (input.value !== "") {
    alert("Task Added!!");
    let newTask = document.createElement("li");
    newTask.innerText = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", deleteTask);

    newTask.appendChild(deleteBtn);
    list.appendChild(newTask);
    input.value = ""; // Clear input field after adding task
  } else {
    alert("Enter your task first!!");
  }
});
