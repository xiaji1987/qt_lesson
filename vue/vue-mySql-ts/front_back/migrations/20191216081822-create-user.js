'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        defaultValue: ''
      },
      password: {
        type: Sequelize.CHAR(32),
        allowNull: false,
        defaultValue: ''
      },
      disabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      mobile: {
        type: Sequelize.CHAR(12),
        unique: true,
        allowNull: false,
        defaultValue: ''
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        defaultValue: ''
      },
      createdIpAt: {
        type: Sequelize.CHAR(15),
        allowNull: false,
        field: 'created_ip_at',
        defaultValue: ''
      },
      updatedIpAt: {
        type: Sequelize.CHAR(15),
        allowNull: false,
        field: 'updated_ip_at',
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    }, {
      tableName: 'user',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: [
        {
          
        }
      ]
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};