const express = require('express');
const router = express();
const activoController = require("../controladores/activoControler.js");

router.get('/', activoController.mostrar);
router.get('/id/:id',activoController.buscarPorId);
router.get('/serie/:serie',activoController.buscarPorNumeroSerie); 
router.delete('/id/:id',activoController.eliminarPorId);
router.put('/id/:id',activoController.actualizarActivo);
router.post('/',activoController.agregarNuevoActivo);
router.patch('/id/:id',activoController.updateActivo);

module.exports = router;