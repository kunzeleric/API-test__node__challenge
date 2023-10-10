import 'dotenv/config'

export default {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: 'testeeric',
    },
  };

