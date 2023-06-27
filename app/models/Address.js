'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      // una direccion pertenece a un usuario
      Address.belongsTo(models.User, { as: 'residente', foreignKey:'user_id' })
    }
  }
  Address.init({
    street: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'addresses',
    timestamps: false
  });
  return Address;
};