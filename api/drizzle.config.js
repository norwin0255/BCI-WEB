import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.js',   // Path to your schema file
  out: './drizzle/migrations',    // Output folder for migrations
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    database: 'bci_web',
  },
});
