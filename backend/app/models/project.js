'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Project.associate = function({ Order, Material }) {
    Project.belongsTo(Order);

    Project.hasMany(Material);
  };
  return Project;
};
