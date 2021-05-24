let todoInput = document.querySelector("#todo-input");
let todoForm = document.querySelector("#todo-form");
let todoOutput = document.querySelector("#todo-output");

let todoList = [];

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    todoList.unshift(todoInput.value);
    update();
})

function update() {
    todoOutput.innerHTML = "";
    todoList.forEach((e) => {
        let listItem = document.createElement("li");
        listItem.innerText = e;
        listItem.addEventListener("click",  removeItem);
        todoOutput.append(listItem);
    })
}

function removeItem(event) {
    let itemToRemove = event.target.innerText;
    todoList = todoList.filter((item) => item !== itemToRemove);
    update();
}

