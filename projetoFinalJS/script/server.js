// Importando os módulos necessárias
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configurando o CORS e o parser de JSON
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração do conexão com o banco de dados
const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // xampp não exige senha
    database: 'db_aura',
    port: 3306
});

// Conectando ao banco de dados
db.connect(err =>{
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});