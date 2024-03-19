const Responsable = require('../modulos/responsable.js');
let listaResponsables = [
    new Responsable(1, '123', 'Juan Pérez', ['INV-001', 'INV-002'], 'https://picsum.photos/900/675'),
    new Responsable(2, '456', 'María López', ['INV-003'], 'https://picsum.photos/900/675'),
    new Responsable(3, '789', 'Pedro García', ['INV-004'], 'https://picsum.photos/900/675'),
    new Responsable(4, '012', 'Ana Martínez', ['INV-005'], 'https://picsum.photos/900/675'),
];

const mostrar = (req, res) => {
    res.json(listaResponsables);
};
const agregarNuevoResponsable = (req, res) => {
    const { id,numeroEmpleado, nombre, activosEnCustodia, imagen } = req.body;
    if(listaResponsables.findIndex(responsable => responsable.id == id)!=-1){
        res.status(404).send("ID repetida");
    }else if(id&&numeroEmpleado&&nombre&&activosEnCustodia&&imagen){
        const nuevoResponsable = new Responsable(id, numeroEmpleado, nombre, activosEnCustodia, imagen);
        listaResponsables.push(nuevoResponsable);
        res.status(201).json(nuevoResponsable);
    }else{
        res.status(402).json({error:'Faltas elementos'});
    }
};
const actualizarResponsable = (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaResponsables.findIndex(responsable => responsable.id === id);
    if (index !== -1) {
        const { id,numeroEmpleado, nombre, activosEnCustodia, imagen } = req.body;
        if(id&&numeroEmpleado&&nombre&&activosEnCustodia&&imagen){
            if(listaUbicaciones.findIndex(ubicacion => ubicacion.id == id)!=-1){
                res.status(404).send("ID repetida");
            }else{
                const responsableActualizado = {
                    id:id ,
                    numeroEmpleado: numeroEmpleado ,
                    nombre: nombre ,
                    activosEnCustodia: activosEnCustodia ,
                    imagen: imagen 
                };
                listaResponsables[index] = responsableActualizado;
                res.json(responsableActualizado);
            }
        } else{
            res.status(402).json({error:'Faltas elementos'});
        }
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};
const buscarResponsablePorId = (req, res) => {
    if (listaResponsables.findIndex(responsable => responsable.id == parseInt(req.params.id))!=-1) {
        res.json(listaResponsables.find(responsable => responsable.id == parseInt(req.params.id)));
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};
const buscarResponsablePorNumeroEmpleado = (req, res) => {
    if (listaResponsables.findIndex(responsable => responsable.numeroEmpleado === req.params.numem)!=-1) {
        res.json(listaResponsables.find(responsable => responsable.numeroEmpleado === req.params.numem));
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};
const updateResponsable = (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaResponsables.findIndex(responsable => responsable.id === id);
    if (index !== -1) {
        const responsableActual = listaResponsables[index];
        const { id, numeroEmpleado, nombre, imagen } = req.body;
        if (id) {
            if (listaResponsables.findIndex(responsable => responsable.id == id) !== -1) {
                res.status(401).send("ID repetida");
            } else {
                responsableActual.id = id;
            }
        }
        if (numeroEmpleado) responsableActual.numeroEmpleado = numeroEmpleado;
        if (nombre) responsableActual.nombre = nombre;
        if (imagen) responsableActual.imagen = imagen;

        listaResponsables[index] = responsableActual;
        res.json(responsableActual);
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};
const eliminarResponsablePorId = (req, res) => {
    const index = listaResponsables.findIndex(responsable => responsable.id === parseInt(req.params.id));
    if (index !== -1) {
        res.json(listaResponsables.find(responsable => responsable.id === parseInt(req.params.id)));
        listaResponsables.splice(index, 1);
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};

module.exports = {
    mostrar,
    buscarResponsablePorId,
    buscarResponsablePorNumeroEmpleado,
    eliminarResponsablePorId,
    agregarNuevoResponsable,
    actualizarResponsable,
    updateResponsable
};
