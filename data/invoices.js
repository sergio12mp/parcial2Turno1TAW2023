const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
  return db.define('invoices', {
    InvoiceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'CustomerId'
      }
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    BillingAddress: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    BillingCity: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BillingState: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BillingCountry: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BillingPostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'invoices',
    timestamps: false,
    indexes: [
      {
        name: "IFK_InvoiceCustomerId",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
