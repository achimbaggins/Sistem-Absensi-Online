'use strict';
module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define('Class', {
    name: DataTypes.STRING
  });
  return Class;
};
