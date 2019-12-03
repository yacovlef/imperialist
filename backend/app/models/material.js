'use strict';

module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    NomenclatureId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Material.associate = function({ Nomenclature, Product }) {
    Material.belongsTo(Nomenclature);

    Material.belongsTo(Product);
  };
  return Material;
};
