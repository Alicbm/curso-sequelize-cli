const { Sequelize, DataTypes } = require('sequelize')
const { config } = require('../config/database')

const sequelize = new Sequelize(`mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`)

// vinculamos los modelos a la DB
sequelize.User = require('./models/User')(sequelize, DataTypes)
sequelize.Address = require('./models/Address')(sequelize, DataTypes)

module.exports = sequelize