'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Project.associate = function({ Product }) {
    Project.hasMany(Product);
  };
  return Project;
};
