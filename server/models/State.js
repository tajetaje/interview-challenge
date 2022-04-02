const { DataTypes, Model } = require('sequelize');
const sequelize = require('../util/SequelizeManager');

class State extends Model {
  // any wanted custom functionality can go in here.
}

// This function creates the actual model definition.
State.init({
  // Model attributes are defined here
  // No need to include id for the model. That is included automatically!
  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pop: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  growth: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  pop2018: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pop2010: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  growthSince2010: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  percent: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  density: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'State', // We need to choose the model name
});

module.exports = State;
