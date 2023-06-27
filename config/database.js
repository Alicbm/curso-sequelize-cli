require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'elpepe',
  dbName: process.env.DB_DATABASE || 'cli',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '3307',
}

module.exports = { config }

