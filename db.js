let connect = function() {
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: 'postgres://jbgayqih:FuFQRdsdiPJwEkCvCLB5ck9Yo2vV3YnA@kesavan.db.elephantsql.com/jbgayqih'
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect };