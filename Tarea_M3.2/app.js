const express = require('express');
const app = express();
const port = 4000;
const activoRouter = require('./routers/activoRuter');
// const activoRouter = require('./controladores/activoControler.js');
const ubicacionRouter = require('./routers/ubicacionRouter.js');
const responsableRouter = require('./routers/responsableRouter.js');
// const activo = require('./modulos/activo.js');

app.use(express.json());
// Rutas para activos
app.use("/activos",activoRouter);
// Rutas para ubicaciones
app.use("/ubicaciones",ubicacionRouter);
// Rutas para responsables
app.use("/responsables",responsableRouter);
app.get('/', (req, res) => {
    res.send("Bienvenido a mi WEB!");
});

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto:', port);
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err);
});
