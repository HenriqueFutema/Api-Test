const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

const UserController = require('./Controllers/UserController')

//mongoose.connect('mongodb://@ds143156.mlab.com:43156/treino', { useNewUrlParser: true })


app.get('/', UserController.index)
app.get('/user/:id', UserController.show)
app.delete('/user/:id', UserController.delete)
app.put('/user/:id', UserController.update)
app.post('/user', UserController.store)

app.listen(3000)