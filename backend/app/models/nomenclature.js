'use strict';

module.exports = (sequelize, DataTypes) => {
  const Nomenclature = sequelize.define('Nomenclature', {
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    tableName: 'Nomenclature',
    paranoid: true
  });
  Nomenclature.associate = function({ Material }) {
    Nomenclature.hasMany(Material);
  };
  return Nomenclature;
};
