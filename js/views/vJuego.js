import { Vista } from './vista.js'

export class Juego extends Vista {
    constructor(controlador, base) {
        super(controlador, base)

        this.btnPiedra = this.base.querySelectorAll('button')[0]
        this.btnPapel = this.base.querySelectorAll('button')[1]
        this.btnTijera = this.base.querySelectorAll('button')[2]
         
        this.btnPiedra.addEventListener('click', () => this.pulsarOpcion('piedra'))
        this.btnPapel.addEventListener('click', () => this.pulsarOpcion('papel'))
        this.btnTijera.addEventListener('click', () => this.pulsarOpcion('tijera'))
    }

    pulsarOpcion(opcion) {
        this.controlador.escoger(opcion);
    }

    mostrarResultado(mensaje) {
        this.resultado.textContent = mensaje;
    }

    mostrarResultado(mensaje) {
        
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = mensaje;
    }
}
