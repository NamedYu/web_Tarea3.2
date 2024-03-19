// const express = require('express');
// const router = express.Router();

const Activo = require('../modulos/activo.js');
let listaActivos = [
    new Activo(1, '123456', 'INV-001', 'Computadora', 'Computadora de escritorio', 'Oficina 1', 'Juan Pérez', 'https://picsum.photos/900/675'),
    new Activo(2, '789012', 'INV-002', 'Mueble', 'Mesa de trabajo', 'Oficina 2', 'María López', 'https://picsum.photos/900/675'),
    new Activo(3, '345678', 'INV-003', 'Equipo electrónico', 'Teléfono móvil', 'Oficina 3', 'Pedro García', 'https://picsum.photos/900/675'),
    new Activo(4, '901234', 'INV-004', 'Herramienta', 'Destornillador', 'Almacén 1', 'Ana Martínez', 'https://picsum.photos/900/675'),
    new Activo(5, '567890', 'INV-005', 'Mobiliario', 'Silla de oficina', 'Oficina 4', 'Luisa Rodríguez', 'https://picsum.photos/900/675')
];

const mostrar = (req,res) => {
    res.json(listaActivos);
};
const buscarPorId = (req,res) => {
    if (listaActivos.findIndex(activo => activo.id == parseInt(req.params.id))!=-1) {
        res.json(listaActivos.find(activo => activo.id == parseInt(req.params.id)));
    } else {
        res.status(404).json({ error: 'Activo no encontrada' });
    }
}
const buscarPorNumeroSerie = (req,res) => {
    if(listaActivos.findIndex(activo => activo.numeroSerie == req.params.serie)!=-1){
        res.json(listaActivos.find(activo => activo.numeroSerie == req.params.serie));
    } else{
        res.status(404).json({ error: 'Activo no encontrada' });
    }
}
const eliminarPorId = (req,res) => {
    const index = listaActivos.findIndex(activo => activo.id == parseInt(req.params.id));

    if (index !== -1) {
        res.json(listaActivos.find(activo => activo.id == parseInt(req.params.id))); 
        listaActivos.splice(index, 1);
    } else {
        res.status(404).json({ error: 'No find' });
    }
}
const updateActivo = (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaActivos.findIndex(activo => activo.id === id);
    if (index !== -1) {
        const activoActual = listaActivos[index];
        const { id,numeroSerie, numeroInventarioUABC, tipo, descripcion, ubicacion, responsable, imagen } = req.body;
        if(id){
            if(listaActivos.findIndex(activo => activo.id == id)!=-1){
                res.status(401).send("ID repetida");
            }else{
                activoActual.id = id;
            }
        }
        if (numeroSerie) activoActual.numeroSerie = numeroSerie;
        if (numeroInventarioUABC) activoActual.numeroInventarioUABC = numeroInventarioUABC;
        if (tipo) activoActual.tipo = tipo;
        if (descripcion) activoActual.descripcion = descripcion;
        if (ubicacion) activoActual.ubicacion = ubicacion;
        if (responsable) activoActual.responsable = responsable;
        if (imagen) activoActual.imagen = imagen;

        listaActivos[index] = activoActual;
        res.json(activoActual);
    } else {
        res.status(404).json({ error: 'Activo no encontrado' });
    }
};
const actualizarActivo = (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaActivos.findIndex(activo => activo.id === id);
    if (index !== -1) {
        const { id,numeroSerie, numeroInventarioUABC, tipo, descripcion, ubicacion, responsable, imagen } = req.body;
        if(listaActivos.findIndex(activo => activo.id == id)!=-1){
            res.status(401).send("ID repetida");
        }else{
            if(id&&numeroSerie&&numeroInventarioUABC&&tipo&&descripcion&&ubicacion&&responsable&&imagen){
                const activoActualizado = {
                    id:id,
                    numeroSerie: numeroSerie,
                    numeroInventarioUABC: numeroInventarioUABC,
                    tipo: tipo,
                    descripcion: descripcion,
                    ubicacion: ubicacion,
                    responsable: responsable,
                    imagen: imagen
                };
                listaActivos[index] = activoActualizado;
                res.json(activoActualizado);
            }
            else{
                res.status(402).json({error:'Faltas elementos'});
            }
        }
    } else {
        res.status(404).json({ error: 'Activo no encontrado' });
    }
};

const agregarNuevoActivo = (req, res) => {
    const { id,numeroSerie, numeroInventarioUABC, tipo, descripcion, ubicacion, responsable, imagen } = req.body;
    if(listaActivos.findIndex(activo => activo.id == id)!=-1){
        res.status(401).send("ID repetida");
    }else if(id&&numeroSerie&&numeroInventarioUABC&&tipo&&descripcion&&ubicacion&&responsable&&imagen){
        const nuevoActivo = new Activo(id, numeroSerie, numeroInventarioUABC, tipo, descripcion, ubicacion, responsable, imagen);
        listaActivos.push(nuevoActivo);
        res.status(201).json(nuevoActivo);
    }else{
        res.status(402).json({error:'Faltas elementos'});
    }
};

module.exports = {
    mostrar,
    buscarPorId,
    buscarPorNumeroSerie,
    eliminarPorId,
    actualizarActivo,
    agregarNuevoActivo,
    updateActivo
};
