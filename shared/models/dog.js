'use strict';
module.exports = (sequelize, DataTypes) => {
  const dog = sequelize.define('dog', {
    name: DataTypes.STRING,
    reg: DataTypes.STRING
  }, {});
  dog.associate = function(models) {
    // associations can be defined here
  };
  return dog;
};
