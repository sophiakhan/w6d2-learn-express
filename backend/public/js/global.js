document.querySelector('#signupButton').addEventListener('click', signup);

function signup() {
    var nameInput = document.querySelector('#name')

    fetch('http://localhost:3000/users', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value
        })
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            console.log(response)
        })
}

git remote add origin https://github.com/sophiakhan/w6d2-learn-express.git
git push -u origin master