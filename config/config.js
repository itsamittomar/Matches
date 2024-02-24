const config = {
  development: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'mydb'
    },
  },
  test: {
    server: {
      port: 3000,
      host: 'localhost'
    },
    database: {
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'mydb'
    },
  }
};

const env = process.env.NODE_ENV || 'development';

const configuration = config[env];

module.exports = configuration;