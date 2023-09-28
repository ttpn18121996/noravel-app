const databaseConfig = {
  default: process.env.DB_CONNECTION || 'mysql',

  connections: {
    mysql: {
      driver: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || '',
    },

    postgres: {
      driver: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || '',
    },
  },
};

module.exports = databaseConfig;
