var db = require('./database.js');
var tables = require('./tables.js');

function createDatabase(options, callback) {
  db.createDatabase(options, function(response) {
  	 callback(response);
  	 return;
  });
}

function dropDatabase(name, callback) {
  db.dropDatabase(name, function(response) {
  	 callback(response);
  	 return;
  });
}

function createTable(options, callback) {
  tables.createTable(options, function(response) {
  	 callback(response);
  	 return;
  });
}

function dropTable(options, callback) {
  tables.dropTable(options, function(response) {
  	 callback(response);
  	 return;
  });
}

function insertRecord(options, callback) {
  tables.insertRecord(options, function(response) {
     callback(response);
     return;
  });
}

module.exports.createDatabase = createDatabase;
module.exports.dropDatabase = dropDatabase;
module.exports.createTable = createTable;
module.exports.dropTable = dropTable;
module.exports.insertRecord = insertRecord;
