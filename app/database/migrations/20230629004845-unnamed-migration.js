'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('bands', 'place_concerts', {
      type: Sequelize.STRING,
      allowNull: false
    } )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bands', 'place_concerts')
  }
};
