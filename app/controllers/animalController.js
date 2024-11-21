const animalModel = require('../models/animals');

module.exports = {
    getAllAnimals: (req, res) => {
        res.render('animals/index', { animals: animalModel.getAll() });
    },
    addAnimal: (req, res) => {
        animalModel.add(req.body);
        res.redirect('/animals');
    },
    editAnimal: (req, res) => {
        const index = req.params.id;
        const animals = animalModel.getAll();
        res.render('animals/edit', { animal: animals[index], index });
    },
    updateAnimal: (req, res) => {
        const index = req.params.id;
        animalModel.update(index, req.body);
        res.redirect('/animals');
    },
    deleteAnimal: (req, res) => {
        const index = req.params.id;
        animalModel.delete(index);
        res.redirect('/animals');
    },
};
