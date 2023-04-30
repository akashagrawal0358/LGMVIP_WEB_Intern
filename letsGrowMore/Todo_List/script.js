const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
    const todoText = todoInput.value;
    if (todoText === "") {
        alert("Please enter a todo.");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todoText;
    li.appendChild(span);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = "";
});