const { Sequelize, DataTypes } = require('sequelize')
const { config } = require('../config/database')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: config.dialect,
  logging: console.log,
})


// vinculamos los modelos a la DB
sequelize.User = require('./models/User')(sequelize, DataTypes)
sequelize.Address = require('./models/Address')(sequelize, DataTypes)

//asociamos los mdelos
sequelize.User.associate(sequelize)
sequelize.Address.associate(sequelize)

module.exports = sequelize