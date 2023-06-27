const { Sequelize } = require('sequelize')
const { config } = require('../config/database')

const sequelize = new Sequelize(`mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`)

module.exports = sequelize