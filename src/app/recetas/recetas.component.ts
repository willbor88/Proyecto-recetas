import { Component, OnInit } from '@angular/core';
import { Receta } from './reseta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
elementoRecibido:Receta//Elemento recibido del componente hijo
  constructor() { }

  ngOnInit(): void {
  }

  // recibirRecetaDetalle(objtoEvento:Receta){
  //   this.elementoRecibido=objtoEvento//Elemento recibido del componente hijo
  //   console.log(objtoEvento)
   
  // }

}
