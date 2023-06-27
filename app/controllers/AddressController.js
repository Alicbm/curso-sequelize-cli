const { Address } = require('../db')

module.exports = {
  async all(req, res){
    let addresses = await Address.findAll({
      include: 'residente'
    })
    res.json(addresses)
  }
}


