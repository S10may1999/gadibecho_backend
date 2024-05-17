'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    uid: DataTypes.STRING,
    car_name: DataTypes.STRING,
    purchase_date: DataTypes.STRING,
    used_in_km: DataTypes.INTEGER,
    model: DataTypes.STRING,
    offer_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};