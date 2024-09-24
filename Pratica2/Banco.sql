CREATE DATABASE escola_db;
USE escola_db;

CREATE TABLE escola (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE aluno (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  telefone VARCHAR(15),
  escola_id INT,
  FOREIGN KEY (escola_id) REFERENCES escola(id)
);
