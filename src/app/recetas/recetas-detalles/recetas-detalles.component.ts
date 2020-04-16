import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../reseta.model';

@Component({
  selector: 'app-recetas-detalles',
  templateUrl: './recetas-detalles.component.html',
  styleUrls: ['./recetas-detalles.component.css']
})
export class RecetasDetallesComponent implements OnInit {
@Input()recetaDetalle:Receta//Elemento recibido del componente padre: recetas.component
  constructor() { }

  ngOnInit(): void {
    console.log(this.recetaDetalle.nombre)
  }

}
