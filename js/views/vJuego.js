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
        this.controlador.escoger(opcion)
    }

    actualizarVista() {
        // Muestra la elección del jugador
        const eleccionUsuarioDiv = document.getElementById('eleccionUsuario')
        if (eleccionUsuarioDiv) {
            eleccionUsuarioDiv.textContent = `Tu elección: ${this.controlador.modelo.eleccionUsuario || '-'}`
        }
    
        // Muestra la elección de la computadora
        const eleccionComputadoraDiv = document.getElementById('eleccionComputadora');
        if (eleccionComputadoraDiv) {
            eleccionComputadoraDiv.textContent = `Elección de la Computadora: ${this.controlador.modelo.eleccionComputadora || '-'}`
        }
    
        // Muestra el resultado del juego
        const resultadoDiv = document.getElementById('resultado');
        if (resultadoDiv) {
            resultadoDiv.textContent = this.controlador.modelo.resultado || ''
        }
    
        // Actualiza la puntuación en la pantalla
        const puntuacionDiv = document.getElementById('puntuacion')
        if (puntuacionDiv) {
            puntuacionDiv.textContent = `Puntuación: Jugador ${this.controlador.modelo.puntuacionUsuario} - Computadora ${this.controlador.modelo.puntuacionComputadora}`
        }
    }
    
    mostrarResultado(mensaje) {
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent = mensaje
    }
}