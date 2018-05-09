const express = require('express')
const app = express()
const path = require('path')
//const util = require('util')
const fs = require('fs')
const mysql = require('mysql2/promise')
const db = require('./db')
// const readFile = util.promisify(fs.readFile)
//const char = require('./characters.json')

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

/*
// new routes here..
app.get('/monuments', (req, res) => {
  const filePath = path.join(__dirname, 'characters.json')
  // promise
  readFile(filePath)
    // traitement de la donnéee
    .then(data => {
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.end(data)
    })
    // gestion de l'erreur
    .catch(err => {
      res.status(404).end('not found')
    })
})


app.get('/males', (req, res) => {
  const filePath = path.join(__dirname, 'characters.json')
  // promise
  readFile(filePath, 'utf8')
    // traitement de la donnéee
    .then(JSON.parse)
    .then(data => {  
      data = data.filter(g => g.gender === "male")
      res.json(data)      
    })
    
    // gestion de l'erreur
    .catch(err => {
      res.status(404).end('not found')
    })
})

app.get('/females', (req, res) => {
 // const filePath = path.join(__dirname, 'characters.json')
  // promise
  readFile(filePath, 'utf8')
       // traitement de la donnéee
       .then(JSON.parse)
       .then(data => {  
         data = data.filter(g => g.gender === "female")
         res.json(data)      
       })
    // gestion de l'erreur
    .catch(err => {
      res.status(404).end('not found')
      console.log(err)
    })
})


app.get('/profile/:id', (request, response) => {
  const id = Number(request.params.id)
  const img = char.find(img => img.id === id)
  response.json(img)
})
*/

app.listen(5555, () => console.log(`server listening on port: 5555`))
