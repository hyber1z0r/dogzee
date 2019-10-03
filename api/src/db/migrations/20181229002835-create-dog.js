'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      registrationNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sex: {
        allowNull: false,
        type: Sequelize.ENUM(['Male', 'Bitch'])
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dogs');
  }
};
