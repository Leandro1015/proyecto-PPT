import {Vista} from './views/vista.js'

class Controlador {
    constructor() {
        this.vistas = new Map()
        this.inicializarVistas()

        //referencia de la interfaz
        const divInicio = document.getElementById('divInicio');
        const divPiedra = document.getElementById('divPiedra');
        const divPapel = document.getElementById('divPapel');
        const divTijera = document.getElementById('divTijera');
    }

    inicializarVistas() {
        this.vistas.set(Vista.vinicio, new Vista(this, document.getElementById('inicio')))
        this.vistas.set(Vista.vpiedra, new Vista(this, document.getElementById('piedra')))
        this.vistas.set(Vista.vpapel, new Vista(this, document.getElementById('papel')))
        this.vistas.set(Vista.vtijera, new Vista(this, document.getElementById('tijera')))

        this.verVista(Vista.vinicio)
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
            Vista.mostrarResultado('¡Es un empate!')
        } else if (
            (opcion === Vista.piedra && eleccionComputadora === 'tijera') ||
            (opcion === Vista.papel && eleccionComputadora === 'piedra') ||
            (opcion === Vista.tijera && eleccionComputadora === 'papel')
        ) {
            juego.puntuacionUsuario++;
            Vista.mostrarResultado('¡Ganaste!')
        } else {
            juego.puntuacionComputadora++;
            Vista.mostrarResultado('¡Perdiste!')
        }

        Vista.actualizarVista()

        if (juego.puntuacionUsuario === 3 || juego.puntuacionComputadora === 3) {
            window.alert(`Juego terminado. Puntuación final: Usuario ${juego.puntuacionUsuario} - Computadora ${juego.puntuacionComputadora}`)
            juego.reiniciar()
            Vista.actualizarVista() // Actualiza la vista después de reiniciar
        }
    }
}

const controlador = new Controlador()