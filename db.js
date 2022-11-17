const Pool = require ("pg").Pool

const pool = new Pool ({ //class
    user: "postgres",
    password: "veron0512",
    host: "localhost", 
    port: 5432,
    database: "test_node"
});

module.exports = pool