const express = require('express');
const router = express();
const responsableController = require('../controladores/responsableControler');

router.get('/', responsableController.mostrar);
router.get('/id/:id', responsableController.buscarResponsablePorId);
router.get('/numem/:numem', responsableController.buscarResponsablePorNumeroEmpleado);
router.delete('/id/:id', responsableController.eliminarResponsablePorId);
router.put('/id/:id',responsableController.actualizarResponsable);
router.post('/',responsableController.agregarNuevoResponsable);
router.patch('/id/:id',responsableController.updateResponsable);

module.exports = router;