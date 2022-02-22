const db = require("../db");

class Client {
  static async select(){
    const connect = await db.connect();
    return await connect.query('select * from clientes');
  }

  static async insert(data){
    const connect = await db.connect();
    const sql = 'insert into clientes(nome, idade, uf) values ($1, $2, $3);';
    const values = [data.nome, data.idade, data.uf];
    return await connect.query(sql, values);
  }

  static async update(id, data){
    const connect = await db.connect();
    const sql = 'UPDATE clientes SET nome=$1, idade=$2, uf=$3 WHERE id=$4';
    const values = [data.nome, data.idade, data.uf, id];
    return await connect.query(sql, values);
  }

  static async delete(id){
    const connect = await db.connect();
    const sql = 'DELETE FROM clientes where id=$1;';
    return await connect.query(sql, [id]);
  }

  static async delete_all(){
    const connect = await db.connect();
    const sql = 'DELETE FROM clientes;';
    return await connect.query(sql, [id]);
  }
}

module.exports = Client;