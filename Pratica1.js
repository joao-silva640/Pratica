const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'escola'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

// Método para gravar
function gravarAluno(id, nome, email) {
    const sql = 'INSERT INTO aluno (id, nome, email) VALUES (?, ?, ?)';
    connection.query(sql, [id, nome, email], (err, result) => {
        if (err) throw err;
        console.log('Aluno gravado:', result.insertId);
    });
}

// Método para buscar
function buscarAlunos() {
    connection.query('SELECT id, nome, email FROM aluno', (err, results) => {
        if (err) throw err;
        console.log('Alunos:', results);
    });
}
