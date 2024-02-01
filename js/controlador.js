import {Vista} from './views/vista.js'
import {Modelo} from './views/modelo.js'
import {Juego} from './views/vjuego.js'
import {Inicio} from './views/vinicio.js'

class Controlador {

    vistas = new Map()

    constructor() {
        this.modelo = new Modelo()
        this.inicializarVistas()
    }

    inicializarVistas() {
        const divInicio = document.getElementById('divInicio')
        const divJuego = document.getElementById('divJuego')

        this.vistas.set(Vista.vInicio, new Inicio(this, divInicio))
        this.vistas.set(Vista.vJuego, new Juego(this, divJuego))

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
        this.modelo.eleccionComputadora = eleccionComputadora
        this.modelo.eleccionUsuario = opcion
    
        console.log(`Tu elección: ${opcion}`)
        console.log(`Elección de la Computadora: ${eleccionComputadora}`)
    
        if (opcion === eleccionComputadora) 
        {
            console.log('¡Es un empate!')
            this.modelo.resultado = '¡Es un empate!'
            this.vistas.get(Vista.vJuego).mostrarResultado('¡Es un empate!')  
        } 
        else 
            if (
                (opcion === 'piedra' && eleccionComputadora === 'tijera') ||
                (opcion === 'papel' && eleccionComputadora === 'piedra') ||
                (opcion === 'tijera' && eleccionComputadora === 'papel')
            ) 
        {
            this.modelo.puntuacionUsuario++
            console.log('¡Ganaste!')
            this.modelo.resultado = '¡Ganaste!'
            this.vistas.get(Vista.vJuego).mostrarResultado('¡Ganaste!')
        } 
        else {
            this.modelo.puntuacionComputadora++
            console.log('¡Perdiste!')
            this.modelo.resultado = '¡Perdiste!'
            this.vistas.get(Vista.vJuego).mostrarResultado('¡Perdiste!')
        }
    
        console.log(`Puntuación: Jugador ${this.modelo.puntuacionUsuario} - Computadora ${this.modelo.puntuacionComputadora}`)
    
        this.vistas.get(Vista.vJuego).actualizarVista()
    
        if (this.modelo.puntuacionUsuario === 3 || this.modelo.puntuacionComputadora === 3) {
            window.alert(`Juego terminado. Resultado: ${this.modelo.resultado} Puntuación final: Usuario ${this.modelo.puntuacionUsuario} - Computadora ${this.modelo.puntuacionComputadora}`)
            this.modelo.reiniciar()
            this.vistas.get(Vista.vJuego).actualizarVista()
        }
    }
}

window.onload = () => {
    new Controlador()
}