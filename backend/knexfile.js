require("dotenv").config(); // Load .env variables

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg", // Use PostgreSQL instead of SQLite
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "user1",
      password: process.env.DB_PASSWORD || "123",
      database: process.env.DB_NAME || "GraphqlDB",
      port: process.env.DB_PORT || 5432,
    },
    migrations: {
      directory: "./src/migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME || "my_db",
      user: process.env.DB_USER || "username",
      password: process.env.DB_PASSWORD || "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME || "my_db",
      user: process.env.DB_USER || "username",
      password: process.env.DB_PASSWORD || "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
