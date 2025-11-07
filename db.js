// db.js
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbDir = path.join(__dirname, 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir);
}

const dbPath = path.join(dbDir, 'contatos.db');
const db = new Database(dbPath);

// Criação da tabela (roda uma vez e garante estrutura)
db.prepare(`
  CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    idade INTEGER,
    genero TEXT,
    interesses TEXT,
    mensagem TEXT NOT NULL,
    aceite INTEGER NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

module.exports = db;