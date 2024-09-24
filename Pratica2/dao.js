import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sua_senha",
    database: "escola_db"
});

connection.connect();

class AlunoDAO {

  // Método para inserir aluno no banco de dados
  inserir(aluno, callback) {
    const sql = "INSERT INTO aluno SET ?";
    connection.query(sql, aluno, (error, results) => {
      if (error) throw error;
      aluno.id = results.insertId;
      callback(aluno);
    });
  }

  // Método para atualizar aluno no banco de dados
  atualizar(id, aluno, callback) {
    const sql = "UPDATE aluno SET ? WHERE id = ?";
    connection.query(sql, [aluno, id], (error, results) => {
      if (error) throw error;
      callback(results);
    });
  }
}

export default AlunoDAO;
