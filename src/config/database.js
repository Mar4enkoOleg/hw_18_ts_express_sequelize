require("dotenv").config();

module.exports = {
  development: {
    // local
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    // username: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB,
    // host: process.env.DB_HOST,
    dialect: "postgres",
    define: {
      freezeTableName: true,
      underscoredAll: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    seederStorageTableName: "sequelize_data",
    seederStorage: "sequelize",
    pool: {
      max: 10,
      min: 1,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
