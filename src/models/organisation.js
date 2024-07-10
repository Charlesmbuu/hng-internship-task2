const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Organisation = sequelize.define('Organisation', {
  orgId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Organisation;