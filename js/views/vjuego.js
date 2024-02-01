import {Vista} from './vista.js'
export class Juego extends Vista {
    constructor(controlador, base) {
        super(controlador, base)

        this.btnPiedra = this.base.querySelectorAll('button')[0]
        this.btnPapel = this.base.querySelectorAll('button')[1]
        this.btnTijera = this.base.querySelectorAll('button')[2]
         
        this.btnPiedra.addEventListener('click', () => this.pulsarOpcion('piedra'))
        this.btnPapel.addEventListener('click', () => this.pulsarOpcion('papel'))
        this.btnTijera.addEventListener('click', () => this.pulsarOpcion('tijera'))

        this.eleccionUsuarioDiv = document.getElementById('eleccionUsuario')
        this.eleccionComputadoraDiv = document.getElementById('eleccionComputadora')
    }

    pulsarOpcion(opcion) {
        this.controlador.escoger(opcion)
    }

    actualizarVista() {
        // Muestra la elección del jugador
        if (this.eleccionUsuarioDiv) {
            this.eleccionUsuarioDiv.textContent = `Tu elección: ${this.controlador.modelo.eleccionUsuario}`
        }
    
        // Muestra la elección de la computadora
        if (this.eleccionComputadoraDiv) {
            this.eleccionComputadoraDiv.textContent = `Elección de la Computadora: ${this.controlador.modelo.eleccionComputadora}`
        }
    
        // Actualiza la puntuación en la pantalla
        const puntuacionDiv = document.getElementById('puntuacion')
        if (puntuacionDiv) {
            puntuacionDiv.textContent = `Puntuación: Jugador ${this.controlador.modelo.puntuacionUsuario} - Computadora ${this.controlador.modelo.puntuacionComputadora}`
        }

        // Oculta el div resultado a la hora de reiniciar el juego
        const resultadoDiv = document.getElementById('resultado')
        if (resultadoDiv) 
        {
            if (this.controlador.modelo.resultado) 
            {
                resultadoDiv.style.display = 'block'
            } 
            else 
            {
                resultadoDiv.style.display = 'none'
            }
        }
    }    
    
    mostrarResultado(mensaje) {
        const resultadoDiv = document.getElementById('resultado')
        resultadoDiv.textContent = mensaje
    }
}
