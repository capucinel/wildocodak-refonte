const mysql = require('mysql2/promise')

const co = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'capucine',
    database : 'wildocodak'
  })
// methode async await
  const exec = async (query, params) => {
    const connection = await co
    const result = await connection.execute(query, params)
    return result[0]
  }

const getImages = () =>  exec("SELECT * FROM images")
const getImagesM = () =>  exec("SELECT * FROM images WHERE category = 'monument'")
const getImagesB = () =>  exec("SELECT * FROM images WHERE category = 'bridge'")
const getImagesS = () =>  exec("SELECT * FROM images WHERE category = 'statue'")

// exemple pour afficher un id$
 /*
const getImage = (id) => exec("SELECT * FROM images WHERE id = ?", [ id ])
getImage(1)
  .then(image => console.log('image :', image[0].url))
  */

/* methode promise (autre maniere d'ecrire)
d'abord maitriser les promises comme ci dessous avec les .then avant de le faire facon async await
ensuite c'est mieux d'utiliser async await
const getImages = () =>   {
    // tjs return ds les promises pour terminer la fonction
    return co.then(connection => {
    return connection.execute("SELECT * FROM images WHERE category = 'monument'")
    .then((result) => result[0])
})
}
*/
module.exports = {
    getImages,
    getImagesM,
    getImagesB,
    getImagesS
}