export class Vista {

    static {
        Vista.vInicio = Symbol('Inicio')
        Vista.vJuego = Symbol('Juego')
    }

    constructor(controlador, base) {
        this.controlador = controlador
        this.base = base
    }

    mostrar(ver) {
        if (ver)
            this.base.style.display = 'block'
        else 
            this.base.style.display = 'none'
    }
}
