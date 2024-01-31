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

    inicializarEventos() {
        if (this.base.id === 'divInicio') {
            document.getElementById('btnEmpezar').addEventListener('click', () => this.controlador.verVista(Vista.vJuego))
        } 
        else if (this.base.id === 'divJuego') {
            document.getElementById('btnPiedra').addEventListener('click', () => this.controlador.escoger('piedra'))
            document.getElementById('btnPapel').addEventListener('click', () => this.controlador.escoger('papel'))
            document.getElementById('btnTijera').addEventListener('click', () => this.controlador.escoger('tijera'))
        }
    }
}
