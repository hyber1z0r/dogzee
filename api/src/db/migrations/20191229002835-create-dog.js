'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dogs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      nickname: {
        allowNull: true,
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
        type: Sequelize.ENUM(['MALE', 'BITCH'])
      },
      title1: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      title2: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      title3: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ownerId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      motherId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'dogs',
          key: 'id'
        }
      },
      fatherId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'dogs',
          key: 'id'
        }
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
