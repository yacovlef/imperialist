'use strict';

module.exports = (sequelize, DataTypes) => {
  const Nomenclature = sequelize.define('Nomenclature', {
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    tableName: 'Nomenclature'
  });
  Nomenclature.associate = function(models) {
    // associations can be defined here
  };
  return Nomenclature;
};
