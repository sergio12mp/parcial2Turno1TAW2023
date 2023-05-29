const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
  return db.define('tracks', {
    TrackId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    AlbumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albums',
        key: 'AlbumId'
      }
    },
    MediaTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'media_types',
        key: 'MediaTypeId'
      }
    },
    GenreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genres',
        key: 'GenreId'
      }
    },
    Composer: {
      type: DataTypes.STRING(220),
      allowNull: true
    },
    Milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Bytes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tracks',
    timestamps: false,
    indexes: [
      {
        name: "IFK_TrackAlbumId",
        fields: [
          { name: "AlbumId" },
        ]
      },
      {
        name: "IFK_TrackGenreId",
        fields: [
          { name: "GenreId" },
        ]
      },
      {
        name: "IFK_TrackMediaTypeId",
        fields: [
          { name: "MediaTypeId" },
        ]
      },
    ]
  });
};
