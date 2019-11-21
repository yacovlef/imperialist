'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    title: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Order.associate = function({ Project }) {
    Order.hasMany(Project);
  };
  return Order;
};
