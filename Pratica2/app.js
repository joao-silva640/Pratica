import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import AlunoDAO from './dao.js'; // DAO para manipulação do banco de dados
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const alunoDAO = new AlunoDAO();

app.use(bodyParser.urlencoded({ extended: true }));

// Rota para carregar o formulário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para cadastrar aluno
app.post('/cadastro', (req, res) => {
    const { nome, email, telefone } = req.body;
    const novoAluno = { nome, email, telefone };

    alunoDAO.inserir(novoAluno, (aluno) => {
        res.send(`Aluno cadastrado com sucesso! ID: ${aluno.id}`);
    });
});

// Rota para atualizar aluno
app.post('/atualizar', (req, res) => {
    const { id, nome, email, telefone } = req.body;
    const alunoAtualizado = { nome, email, telefone };

    alunoDAO.atualizar(id, alunoAtualizado, (resultado) => {
        res.send(`Aluno de ID ${id} atualizado com sucesso!`);
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
