import {Vista} from './vista.js'

export class Inicio extends Vista {

  constructor(controlador, base) {
    super(controlador, base)

    this.btnEmpezar = this.base.querySelectorAll('button')[0]

    this.btnEmpezar.onclick = this.pulsarEmpezar.bind(this)
  }

  pulsarEmpezar() {
    this.controlador.verVista(Vista.vJuego)
  }
}
