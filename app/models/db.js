const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./zoo.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS animals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            
            name TEXT,
            species TEXT
        )
    `);
});

module.exports = db;
