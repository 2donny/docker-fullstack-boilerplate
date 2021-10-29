import mysql from "mysql";

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "2donny",
  database: "myapp",
});
