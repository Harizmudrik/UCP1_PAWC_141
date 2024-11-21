const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const animalRoutes = require('./app/routes/animalRoutes');

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public')); // Mengakses folder 'public' untuk file statis (CSS, JS, dll.)

// Routing untuk homepage
app.get('/', (req, res) => {
    res.send('Selamat datang di aplikasi pengelolaan data kebun binatang!');
});

// Routing untuk animals
app.use('/animals', animalRoutes);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
