function getTodos() {
    var listItem = document.querySelector('#todos')

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            todo: listItem.value
        })
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        console.log(response)
    })
}

function loopTodos(todos) {
    
}