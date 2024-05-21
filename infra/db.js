const Sequelize = require("sequelize");
const sqlite3 = require('sqlite3').verbose(); // Explicitly require sqlite3
const path = require('path');
const fs = require('fs');

const storagePath = path.resolve(__dirname, 'database.sqlite');

fs.chmodSync(storagePath, 0o666);

const sequelize = new Sequelize({
  dialect: "sqlite",
  dialectModule: sqlite3, // Pass sqlite3 module to Sequelize
  storage: storagePath,
});

module.exports = sequelize;
