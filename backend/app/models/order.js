'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    title: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Order.associate = function({ Product }) {
    Order.hasMany(Product);
  };
  return Order;
};
