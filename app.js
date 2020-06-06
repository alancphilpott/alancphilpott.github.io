// Element Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);

// Functions
function addTodo(event) {
    // Prevent Form Action
    event.preventDefault();

    // Todo Item Wrapper Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // New Todo Item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Checkmark Button
    const checkmarkBtn = document.createElement("button");
    checkmarkIcon = "<i class='fas fa-check'></i>";
    checkmarkBtn.innerHTML = checkmarkIcon;
    checkmarkBtn.classList.add("complete-todo");
    todoDiv.appendChild(checkmarkBtn);

    // Delete Button
    const deleteBtn = document.createElement("button");
    checkmarkIcon = "<i class='fas fa-trash'></i>";
    deleteBtn.innerHTML = checkmarkIcon;
    deleteBtn.classList.add("delete-todo");
    todoDiv.appendChild(deleteBtn);

    // Append todoDiv to List
    todoList.appendChild(todoDiv);

    // Clear Input Value
    todoInput.value = "";
}

function checkDelete(event) {
    const todoChild = event.target;
    let todo = todoChild.parentElement;

    switch (todoChild.classList[0]) {
        case "delete-todo":
            todo.classList.add("fall");
            todo.addEventListener("transitionend", () => {
                todo.remove();
            });
            break;
        case "complete-todo":
            todo.classList.toggle("complete");
            break;
    }
}
