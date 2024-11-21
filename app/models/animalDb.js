const db = require('./db');

module.exports = {
    getAll: (callback) => {
        db.all('SELECT * FROM animals', [], (err, rows) => {
            callback(err, rows);
        });
    },
    add: (animal, callback) => {
        db.run(
            'INSERT INTO animals (name, species) VALUES (?, ?)',
            [animal.name, animal.species],
            callback
        );
    },
    update: (id, animal, callback) => {
        db.run(
            'UPDATE animals SET name = ?, species = ? WHERE id = ?',
            [animal.name, animal.species, id],
            callback
        );
    },
    delete: (id, callback) => {
        db.run('DELETE FROM animals WHERE id = ?', [id], callback);
    },
};
