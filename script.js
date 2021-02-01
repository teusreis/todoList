const addTodo = document.querySelector(".add");
const todoList = document.querySelector("ul.todos");
const todos = todoList.querySelectorAll("li");
const deleteTodo = document.querySelectorAll("i.delete");
const searchTodo = document.querySelector("form.search input");

addTodo.addEventListener("submit", event => {
    event.preventDefault();
    let newTodo = event.target.querySelector("input");

    if (newTodo.value.trim() == "") {
        return;
    }

    todoList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span> ${newTodo.value} </span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    newTodo.value = "";
});

todoList.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.classList.contains("delete")) {
        event.target.parentNode.remove();
    }
})

searchTodo.addEventListener("keyup", (event) => {
    todos.forEach(todo => {
        if (!todo.textContent.includes(event.target.value.trim())) {
            todo.classList.add("hide");
        } else {
            todo.classList.remove("hide");
        }
    });
});

