/**
 * MySQL Database Client
 * 
 * Replaces Supabase with MySQL on Hostinger
 */

import mysql from 'mysql2/promise';

// Create connection pool
const pool = mysql.createPool({
  host: import.meta.env.MYSQL_HOST,
  user: import.meta.env.MYSQL_USER,
  password: import.meta.env.MYSQL_PASSWORD,
  database: import.meta.env.MYSQL_DATABASE,
  port: parseInt(import.meta.env.MYSQL_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection
export async function testConnection() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    connection.release();
    return { success: true, message: 'MySQL connected' };
  } catch (error) {
    console.error('MySQL connection failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

export default pool;
