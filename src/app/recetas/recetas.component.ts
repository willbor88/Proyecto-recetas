import { Component, OnInit } from '@angular/core';
import { Receta } from './reseta.model';
import { RecetasServicio } from '../recetas.servicios';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  providers:[RecetasServicio]//Al declarar el servicio todos los componentes hijos podran acceder al servicio sin declararlo
})
export class RecetasComponent implements OnInit {
elementoRecibido:Receta//Elemento recibido del componente hijo
  constructor(private recetaServicio:RecetasServicio) { }

  ngOnInit(){
    this.recetaServicio.recetaSeleccionada.subscribe((receta:Receta)=>{//Recibo el objeto enviado por el metodo emti()  desde RecetaElementosComponent
      this.elementoRecibido= receta
      console.log(this.elementoRecibido)
    })
  }

  // recibirRecetaDetalle(objtoEvento:Receta){
  //   this.elementoRecibido=objtoEvento//Elemento recibido del componente hijo
  //   console.log(objtoEvento)
   
  // }

}
