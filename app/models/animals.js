let animals = [];

module.exports = {
    getAll: () => animals,
    add: (animal) => animals.push(animal),
    update: (index, animal) => (animals[index] = animal),
    delete: (index) => animals.splice(index, 1),
};