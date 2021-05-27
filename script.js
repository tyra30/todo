let todoInput = document.querySelector("#todo-input");
let todoForm = document.querySelector("#todo-form");
let todoOutput = document.querySelector("#todo-output");

let todoList = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  todoList.unshift(todoInput.value);
  update(todoInput.value);
  console.log();
  todoInput.value = "";
});

function update(text) {
  let listDiv = document.createElement("div");
  listDiv.classList.add("todo-item");
  let listItem = document.createElement("li");
  listItem.innerText = text;
  listItem.addEventListener("click", crossItem);
  listDiv.append(listItem);
  let listButton = document.createElement("button");
  listButton.addEventListener("click", removeItem);
  listButton.innerHTML = '<i class="fas fa-trash"></i>';
  listDiv.append(listButton);
  todoOutput.append(listDiv);
}

function crossItem(event) {
  event.target.classList.add("removed");

  console.log(event.target.classList);
  // let itemToRemove = event.target.innerText;
  // todoList = todoList.filter((item) => item !== itemToRemove);
}

function removeItem(event) {
  let item = event.target;
  let parent = item.parentElement;

  while (parent.nodeName !== "DIV") {
    let newParent = parent.parentElement;
    parent = newParent;
  }

  parent.classList.add("noshow");
}
