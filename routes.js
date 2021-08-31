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
/*  rota para ver os modals */
router.get('/modal-pages', (req, res) => {
    res.render('pages/modal-pages');
});

router.get('/login', (req, res) => {
    res.render('pages/login');
});

module.exports = router;