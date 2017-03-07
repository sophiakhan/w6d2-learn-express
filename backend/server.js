console.log(process.env.DATABASE_URL)

//libraries - loads in express
var express = require('express')
var pg = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
})

var bodyParser = require('body-parser')

// start our web server
var app = express()

// adds public static file support to server
app.use(express.static('public'))
app.use(bodyParser.json())

// routes
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/add', function (req, res) {
    var answer = Number(req.query.number1) + Number(req.query.number2)

    res.send('<h1>' + answer + '</h1>')
})

app.get('/name/:username', function (req, res) {
  res.send('Hey ' + req.params.username)
})

app.get('/users', function (req, res) {
    pg.select('id', 'name', 'username', 'photo_url', 'created_at', 'updated_at').table('users').then(function(data) {
        res.json(data)
    })
})

app.post('/users', function(req, res) {
    pg.insert(req.body).table('users').then(function(data) {
        res.json(data)
    })
})

// listen for web traffic, start the web server (kinda like 'serve' in the terminal)
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})