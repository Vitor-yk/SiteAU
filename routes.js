const express = require("express");
const router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about');
});

router.get('/perfil', (req, res) => {
    res.render('pages/perfil');
});

router.get('/formulario', (req, res) => {
    res.render('pages/formulario');
});

router.get('/perfil-adm', (req, res) => {
    res.render('pages/perfil-adm');
});

router.get('/cadastro', (req, res) => {
    res.render('pages/cadastro', { users: users });
});

module.exports = router;