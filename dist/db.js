"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "chik",
    host: "localhost",
    port: "5432",
    database: "node_postegres"
});
exports.default = pool;
