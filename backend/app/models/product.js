'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Product.associate = function({ Order, Material }) {
    Product.belongsTo(Order);

    Product.hasMany(Material);
  };
  return Product;
};
