const express = require('express');
const router = express();
const ubicacionController = require('../controladores/ubicacionControler.js');

router.get('/', ubicacionController.mostrar);
router.get('/id/:id', ubicacionController.buscarUbicacionPorId);
router.delete('/id/:id', ubicacionController.eliminarUbicacionPorId);
router.put('/id/:id',ubicacionController.actualizarUbicacion);
router.post('/',ubicacionController.agregarNuevaUbicacion);
router.patch('/id/:id',ubicacionController.updateUbicacion);

module.exports = router;