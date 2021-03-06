module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  },
  test: {
    username: 'hundeweb',
    password: 'hundeweb',
    database: 'hundeweb_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
};
