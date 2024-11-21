const express = require('express');
const router = express.Router();

let animals = []; // Array untuk menyimpan data hewan

// GET: Menampilkan daftar hewan
router.get('/', (req, res) => {
    res.render('animals/index', { animals });
});

// GET: Form tambah hewan
router.get('/new', (req, res) => {
    res.render('animals/new');
});

// POST: Tambah data hewan baru
router.post('/', (req, res) => {
    const { name, species } = req.body;
    const id = animals.length + 1;
    animals.push({ id, name, species });
    res.redirect('/animals');
});

// GET: Form edit hewan
router.get('/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animals.find(a => a.id === id);
    if (animal) {
        res.render('animals/edit', { animal });
    } else {
        res.status(404).send('Hewan tidak ditemukan');
    }
});

// PUT: Update data hewan
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animals.find(a => a.id === id);
    if (animal) {
        const { name, species } = req.body;
        animal.name = name;
        animal.species = species;
        res.redirect('/animals');
    } else {
        res.status(404).send('Hewan tidak ditemukan');
    }
});

// DELETE: Hapus data hewan
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    animals = animals.filter(a => a.id !== id);
    res.redirect('/animals');
});

module.exports = router;
