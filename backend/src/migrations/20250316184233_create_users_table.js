module.exports = {
    async up(knex) {
        await knex.raw(`
      CREATE TABLE Users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    },

    async down(knex) {
        await knex.raw(`DROP TABLE IF EXISTS Users;`);
    }
};
