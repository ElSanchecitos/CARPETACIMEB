const { Router } = require('express');
const router = Router();

var controllerCarrera=require('../controllers/controllerCimeb');
router.get('/prueba',controllerCarrera.prueba);
router.post('/nuevoUsuario',controllerCarrera.saveUsuario);
router.get('/verCarreras/:id?',controllerCarrera.listarAllCita);
router.get('/verUnaCarrera/:id',controllerCarrera.buscarCita);

module.exports=router;