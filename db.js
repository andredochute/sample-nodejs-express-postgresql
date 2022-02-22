let connect = function() {
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: ''
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect };