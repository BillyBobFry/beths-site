import pg from 'pg';

const { Pool } = pg;

const POSTGRES_URL = import.meta.env.POSTGRES_URL;
if (!POSTGRES_URL) {
  throw new Error('POSTGRES_URL is required');
}

export const pool = new Pool({
  connectionString: POSTGRES_URL,
})

