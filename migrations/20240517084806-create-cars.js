'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.STRING
      },
      cid: {
        type: Sequelize.STRING
      },
      car_name: {
        type: Sequelize.STRING
      },
      purchase_date: {
        type: Sequelize.STRING
      },
      used_in_km: {
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      offer_price: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};