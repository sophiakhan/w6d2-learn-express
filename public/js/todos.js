getTodos()

function getTodos() {

    fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        console.log(response)
        loopTodos(response)
    })
}

function loopTodos(todos) {
    console.log(todos)
    todos.forEach(function(todo) {
        showTodo(todo)
    })
}

function showTodo(todo) {
    console.log(todo)
    var todoList = `<li class="list-group-item">${todo.todo}</li>`

    document.querySelector('#todos').innerHTML += todoList;
}