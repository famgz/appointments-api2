require('pg');
const Sequelize = require('sequelize');

console.log(process.env.NEON_DB_CONNECTION_STRING);

const databaseUrl = process.env.NEON_DB_CONNECTION_STRING;

const sequelize = new Sequelize(databaseUrl, {
  dialectOptions: {
    connectTimeout: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
