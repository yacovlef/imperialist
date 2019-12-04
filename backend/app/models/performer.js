'use strict';

module.exports = (sequelize, DataTypes) => {
  const Performer = sequelize.define('Performer', {
    interest: DataTypes.INTEGER
  }, {});
  Performer.associate = function({ Product, User, Wages }) {
    Performer.belongsTo(Product);

    Performer.belongsTo(User);

    Performer.hasMany(Wages);
  };
  return Performer;
};
