const express = require('express')
const router = express.Router()

//importamos controladores
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

//home
router.get('/', (req, res) => {
  res.json({foo: 'bar'})
})

//Users
router.get('/users', UserController.all)

//Addresses
router.get('/addresses', AddressController.all)

module.exports = router