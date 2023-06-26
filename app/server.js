const express = require('express')
const app = express();

//Puerto
const port = process.env.PORT || 3000

//Middelware
//Para poder rellenar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Rutas
app.get('/', (req, res) => {
  res.json('Hola mundo')
})

//Corremos el servidor
app.listen(port, () => {
  console.log('Runing in ' + port);
})