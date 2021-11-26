const { Router } = require('express');
const router = Router();

var controllerCarrera=require('../controllers/controllerCarrera');
router.get('/prueba',controllerCarrera.prueba);
router.post('/nueva',controllerCarrera.saveCarrera);
router.get('/verCarreras/:id?',controllerCarrera.listarAllData);
router.get('/verUnaCarrera/:id',controllerCarrera.buscarData);

module.exports=router;