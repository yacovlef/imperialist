'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    interest: DataTypes.INTEGER
  }, {
    paranoid: true
  });
  User.associate = function({ Performer }) {
    User.hasMany(Performer);
  };
  return User;
};
