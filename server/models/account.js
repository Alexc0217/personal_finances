'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.User, {foreignKey: 'userId', as: 'account'});
      Account.hasMany(models.Transaction);
    }
  }
  Account.init({
    totalValue: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};