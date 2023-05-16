const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "chik",
    host: "localhost",
    port: "5432",
    database: "node_postegres"
})


module.exports = pool
