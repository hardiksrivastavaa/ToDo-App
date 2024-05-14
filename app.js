let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerText = input.value;
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Please enter your task first!!");
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
