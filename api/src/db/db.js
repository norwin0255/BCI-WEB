import { createConnection } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

const connection = await createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bci_web',
});

export const db = drizzle(connection);
