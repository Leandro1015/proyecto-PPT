import {Vista} from './views/vista.js'
import {Modelo} from './views/modelo.js'
import {Juego} from './views/vJuego.js'
import {Inicio} from './views/vInicio.js'

export class Controlador {

    vistas = new Map()

    constructor() {
        
        this.modelo = new Modelo()
        this.inicializarVistas()
    }

    inicializarVistas() {
        const divInicio = document.getElementById('divInicio')

        this.vistas.set(Vista.vInicio, new Inicio(this, divInicio))
        //this.vistas.set(Vista.vJuego, new Juego(this, divJuego))

        this.verVista(Vista.vInicio)
    }

    verVista(vista) {
        this.ocultarVistas()
        this.vistas.get(vista).mostrar(true)
    }

    ocultarVistas() {
        for (const vista of this.vistas.values()) {
            vista.mostrar(false)
        }
    }

    escoger(opcion) {
        const eleccionComputadora = ['piedra', 'papel', 'tijera'][Math.floor(Math.random() * 3)]

        if (opcion === eleccionComputadora) {
            this.vistas.get(Vista.vJuego).mostrarResultado('¡Es un empate!')
        } else if (
            (opcion === 'piedra' && eleccionComputadora === 'tijera') ||
            (opcion === 'papel' && eleccionComputadora === 'piedra') ||
            (opcion === 'tijera' && eleccionComputadora === 'papel')
        ) {
            Juego.puntuacionUsuario++
            this.vistas.get(Vista.vJuego).mostrarResultado('¡Ganaste!')
        } else {
            Juego.puntuacionComputadora++
            this.vistas.get(Vista.vJuego).mostrarResultado('¡Perdiste!')
        }

        this.vistas.get(Vista.vJuego).actualizarVista()

        if (Juego.puntuacionUsuario === 3 || Juego.puntuacionComputadora === 3) {
            window.alert(`Juego terminado. Puntuación final: Usuario ${Juego.puntuacionUsuario} - Computadora ${Juego.puntuacionComputadora}`)
            Modelo.reiniciar()
            this.vistas.get(Vista.vJuego).actualizarVista()
        }
    }
    
}

window.onload = () => {new Controlador()}