export class Vista {

    static {
        Vista.vinicio = Symbol('Inicio')
        Vista.vpiedra = Symbol('Piedra')
        Vista.vpapel = Symbol('Papel')
        Vista.vtijera = Symbol('Tijera')
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
