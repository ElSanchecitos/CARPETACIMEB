const { Router } = require('express');
const router = Router();

var controllerCarrera=require('../controllers/controllerCimeb');
router.get('/prueba',controllerCarrera.prueba);
router.post('/nuevoPaciente',controllerCarrera.savePaciente);
router.get('/verPacientes/:id?',controllerCarrera.listarAllPaciente);
router.get('/verUnPaciente/:id',controllerCarrera.buscarPaciente);
router.put('/actualizarPaciente/:id',controllerCarrera.updatePaciente);
router.delete('/eliminarPaciente/:id',controllerCarrera.deletePaciente);

module.exports=router;