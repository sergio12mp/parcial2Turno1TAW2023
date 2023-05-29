var DataTypes = require("sequelize").DataTypes;
var _albums = require("./albums");
var _artists = require("./artists");
var _customers = require("./customers");
var _employees = require("./employees");
var _genres = require("./genres");
var _invoice_items = require("./invoice_items");
var _invoices = require("./invoices");
var _media_types = require("./media_types");
var _playlist_track = require("./playlist_track");
var _playlists = require("./playlists");
var _sqlite_stat1 = require("./sqlite_stat1");
var _tracks = require("./tracks");

function initModels(sequelize) {
  var albums = _albums(sequelize, DataTypes);
  var artists = _artists(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var genres = _genres(sequelize, DataTypes);
  var invoice_items = _invoice_items(sequelize, DataTypes);
  var invoices = _invoices(sequelize, DataTypes);
  var media_types = _media_types(sequelize, DataTypes);
  var playlist_track = _playlist_track(sequelize, DataTypes);
  var playlists = _playlists(sequelize, DataTypes);
  var sqlite_stat1 = _sqlite_stat1(sequelize, DataTypes);
  var tracks = _tracks(sequelize, DataTypes);

  tracks.belongsTo(albums, { as: "Album", foreignKey: "AlbumId"});
  albums.hasMany(tracks, { as: "tracks", foreignKey: "AlbumId"});
  albums.belongsTo(artists, { as: "Artist", foreignKey: "ArtistId"});
  artists.hasMany(albums, { as: "albums", foreignKey: "ArtistId"});
  invoices.belongsTo(customers, { as: "Customer", foreignKey: "CustomerId"});
  customers.hasMany(invoices, { as: "invoices", foreignKey: "CustomerId"});
  customers.belongsTo(employees, { as: "SupportRep", foreignKey: "SupportRepId"});
  employees.hasMany(customers, { as: "customers", foreignKey: "SupportRepId"});
  employees.belongsTo(employees, { as: "ReportsTo_employee", foreignKey: "ReportsTo"});
  employees.hasMany(employees, { as: "employees", foreignKey: "ReportsTo"});
  tracks.belongsTo(genres, { as: "Genre", foreignKey: "GenreId"});
  genres.hasMany(tracks, { as: "tracks", foreignKey: "GenreId"});
  invoice_items.belongsTo(invoices, { as: "Invoice", foreignKey: "InvoiceId"});
  invoices.hasMany(invoice_items, { as: "invoice_items", foreignKey: "InvoiceId"});
  tracks.belongsTo(media_types, { as: "MediaType", foreignKey: "MediaTypeId"});
  media_types.hasMany(tracks, { as: "tracks", foreignKey: "MediaTypeId"});
  playlist_track.belongsTo(playlists, { as: "Playlist", foreignKey: "PlaylistId"});
  playlists.hasMany(playlist_track, { as: "playlist_tracks", foreignKey: "PlaylistId"});
  invoice_items.belongsTo(tracks, { as: "Track", foreignKey: "TrackId"});
  tracks.hasMany(invoice_items, { as: "invoice_items", foreignKey: "TrackId"});
  playlist_track.belongsTo(tracks, { as: "Track", foreignKey: "TrackId"});
  tracks.hasMany(playlist_track, { as: "playlist_tracks", foreignKey: "TrackId"});

  return {
    albums,
    artists,
    customers,
    employees,
    genres,
    invoice_items,
    invoices,
    media_types,
    playlist_track,
    playlists,
    sqlite_stat1,
    tracks,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
