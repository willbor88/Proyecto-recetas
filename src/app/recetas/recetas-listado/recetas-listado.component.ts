import { Component, OnInit } from '@angular/core';
import { Receta } from '../reseta.model';

@Component({
  selector: 'app-recetas-listado',
  templateUrl: './recetas-listado.component.html',
  styleUrls: ['./recetas-listado.component.css']
})
export class RecetasListadoComponent implements OnInit {
  //Defino y luego inicializo
  recetas: Receta[]=[
new Receta('Reseta de prueba','Esta es una receta de prueba','https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg')

  ]
  constructor() { }
 

  ngOnInit(): void {
  }

}
