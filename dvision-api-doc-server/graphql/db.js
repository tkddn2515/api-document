import mysql from "mysql2/promise";

const db= mysql.createPool({
  host: 'localhost',    						// 호스트 주소
	port: 3306,
  user: 'root',           					// mysql user
  password: '1',     								// mysql password
  database: 'ninevr_multiverse',    // mysql 데이터베이스
	waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const login = async (account, password) => {
	const [rows] = await db.query('SELECT id, account, admin FROM api_client_doc_member WHERE account = ? and password = ?', [account, password]);
	return rows[0];
}