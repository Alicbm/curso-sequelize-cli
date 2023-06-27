const { User } = require('../db')

module.exports = {
  async all(req, res) {
    let users = await User.findAll({
      include: 'domicilio'
    })
    res.json(users)
  }
}