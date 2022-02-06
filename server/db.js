const Pool = require("pg").Pool;

const pool = new Pool({
	user: "xoxo",
	password: "pass123",
	host: "localhost",
	port: 5432,
	database: "todo_database"
});

module.exports = pool;