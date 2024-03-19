class activo {
    constructor(id, numeroSerie, numeroInventarioUABC, tipo, descripcion, ubicacion, responsable, imagen) {
        this.id = id;
        this.numeroSerie = numeroSerie;
        this.numeroInventarioUABC = numeroInventarioUABC;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.responsable = responsable;
        this.imagen = imagen;
    }
}

module.exports = activo;