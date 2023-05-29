const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
  return db.define('employees', {
    EmployeeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ReportsTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'EmployeeId'
      }
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HireDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "IFK_EmployeeReportsTo",
        fields: [
          { name: "ReportsTo" },
        ]
      },
    ]
  });
};
