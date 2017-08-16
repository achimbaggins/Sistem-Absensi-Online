'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    rfid: DataTypes.INTEGER
  });
  return Student;
};
