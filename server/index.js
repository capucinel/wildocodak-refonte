const express = require('express')
const app = express()
const mysql = require('mysql2/promise')
const db = require('./db')

// MIDDLEWARES
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ROUTES
app.get('/gallery', (req, res) => {
  db.getImages()
    .then(image => res.json(image))
})

app.get('/monuments', (req, res) => {
  db.getImagesM()
    .then(image => res.json(image))
})

app.get('/bridges', (req, res) => {
  db.getImagesB()
    .then(image => res.json(image))
})

app.get('/statues', (req, res) => {
  db.getImagesS()
    .then(image => res.json(image))
})

app.listen(5555, () => console.log(`server listening on port: 5555`))
