import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //title='Recetas'
  objetoRecibido=''

  navegar (ObjetoEvento:string){
   this.objetoRecibido= ObjetoEvento//Enviado desde la etiqueta header
console.log(this.objetoRecibido)
  }
}


