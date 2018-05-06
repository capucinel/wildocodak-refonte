const express = require('express')
const app = express()
// autorisation
app.use((request, response, next) => {
  // response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Origin', request.headers.origin)
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  response.header('Access-Control-Allow-Credentials', 'true') // important
  next()
})


// port ecouter
app.listen(3333, () => console.log('jecoute sur le port 3333'))
