const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
  return db.define('invoice_items', {
    InvoiceLineId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'invoices',
        key: 'InvoiceId'
      }
    },
    TrackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tracks',
        key: 'TrackId'
      }
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'invoice_items',
    timestamps: false,
    indexes: [
      {
        name: "IFK_InvoiceLineInvoiceId",
        fields: [
          { name: "InvoiceId" },
        ]
      },
      {
        name: "IFK_InvoiceLineTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
    ]
  });
};
