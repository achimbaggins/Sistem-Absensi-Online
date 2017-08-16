'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attendance = sequelize.define('Attendance', {
    StudentId: DataTypes.INTEGER,
    ClassId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    Status: DataTypes.STRING
  });
  return Attendance;
};
