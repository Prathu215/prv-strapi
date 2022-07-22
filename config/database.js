module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '35.213.161.9'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dbkfxtqowwvvb6'),
      user: env('DATABASE_USERNAME', 'ul0nxz45rupgi'),
      password: env('DATABASE_PASSWORD', 'satnam348'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});