'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Product.associate = function({ Project, Material, Performer }) {
    Product.belongsTo(Project);

    Product.hasMany(Material);

    Product.hasMany(Performer);
  };
  return Product;
};
