const searchInput = document.querySelector(".search input");
const addTodoForm = document.querySelector(".add");
const addTodoInput = document.querySelector(".add input");
const todos = document.querySelector("ul");

const generateTodo = (text) => {
  const todo = { text, timeStamp: Date.now() };
  const generatedTodo = /*html*/ `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo.text}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

  todos.innerHTML += generatedTodo;
};

const addTodo = (e) => {
  e.preventDefault();
  const addTodoInputValue = addTodoInput.value;
  generateTodo(addTodoInputValue);
  addTodoForm.reset();
};

addTodoForm.addEventListener("submit", addTodo);
