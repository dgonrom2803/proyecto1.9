import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  colores: string[] = ["rojo", "azul","amarillo", "verde", "naranja", "rosa", "blanco", "negro", "morado", "marrón"]
  colorSecreto  : string = "";
  colorUsuario : string = "";
  txtMensaje: string = "";
  fallos: string[] = ["Prueba otro color"," El color no es el correcto", "Inténtalo de nuevo", "Prueba otra vez", "No has acertado"];
  esCorrecto: boolean = false;

  constructor() {
    this.generarColorSecreto();
  }

  comprobarColor(){
    console.log("click en el botón");
    console.log("ColorUsuario=" + this.colorUsuario );
    if(this.colorUsuario  == this.colorSecreto){
      console.log("Ha acertado");
      this.txtMensaje = "¡Ha acertado!";
      this.esCorrecto = true;
    } else {
      console.log("El color no es el correcto");
      this.txtMensaje = this.fallos[Math.floor(Math.random() * this.fallos.length)];;
    }
  }

  generarColorSecreto(){
    this.colorSecreto = this.colores[Math.floor(Math.random() * this.colores.length)];
    console.log("colorSecreto =" + this.colorSecreto);
  }

  reiniciar(){
    this.generarColorSecreto();
    this.esCorrecto = false;
    this.colorUsuario  = "";
    this.txtMensaje = "";
  }

}