require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },
};
