const Sequelize = require('sequelize');
const db = require("../config/database");
module.exports = function(sequelize, DataTypes) {
  return db.define('playlist_track', {
    PlaylistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'playlists',
        key: 'PlaylistId'
      },
      unique: true
    },
    TrackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tracks',
        key: 'TrackId'
      }
    }
  }, {
    sequelize,
    tableName: 'playlist_track',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_playlist_track_1",
        unique: true,
        fields: [
          { name: "PlaylistId" },
          { name: "TrackId" },
        ]
      },
      {
        name: "IFK_PlaylistTrackTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
    ]
  });
};
