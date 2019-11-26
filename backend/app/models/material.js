'use strict';

module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define('Material', {
    NomenclatureId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Material.associate = function({ Nomenclature, Project }) {
    Material.belongsTo(Nomenclature);

    Material.belongsTo(Project);
  };
  return Material;
};
