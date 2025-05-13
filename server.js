// exemplo de conexÃ£o com banco de dados MySQL gerado pelo Gemini 
//
// 1. criar pasta para projeto
// 2. mudar para dentro da pasta
// 3. executar o comando 
//     npm init -y
// 4. instalar express e mysql2
//     npm install express mysql2
//
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// ConfiguraÃ§Ãµes da conexÃ£o com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost', // ou o endereÃ§o do seu servidor MySQL
  user: 'root', // seu nome de usuÃ¡rio do MySQL
  password: '', // sua senha do MySQL
  database: 'facsenac', // o nome do seu banco de dados
  port: 3307,
});

// Conecta ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});


//
app.get('/',(req,res) => {
    res.send('Bem-vindo a sua aplicação Node.js com Express e MySQL')
})

// Rota para consultar os usuÃ¡rios
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT nome, cidade, uf, cod, data FROM usuarios';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro ao buscar os usuÃ¡rios' });
      return;
    }
    res.json(results);
  });
});

// Inicia o servidor Express
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});