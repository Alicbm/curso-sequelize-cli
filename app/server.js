const express = require('express')
const app = express();
const sequelize = require('./db')

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

  //conectamos a la db
  sequelize.sync({ force: true }).then(() => {
    console.log('Se conectó correctamente...');
  }).catch((err) => {
    console.log('Hubo un problema en la conexion a la DB: ', err)
  })
})