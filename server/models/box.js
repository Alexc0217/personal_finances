'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Box.belongsTo(models.User, {foreignKey: 'userId', as: 'boxes'});
    }
  }
  Box.init({
    boxName: DataTypes.STRING,
    value: DataTypes.BIGINT,
    image: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Box',
  });
  return Box;
};