'use strict';

module.exports = (sequelize, DataTypes) => {
  const Wages = sequelize.define('Wages', {
    price: DataTypes.INTEGER
  }, {});
  Wages.associate = function({ Performer }) {
    Wages.belongsTo(Performer);
  };
  return Wages;
};
