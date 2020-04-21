import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../reseta.model';
import { RecetasServicio } from 'src/app/recetas.servicios';

@Component({
  selector: 'app-recetas-detalles',
  templateUrl: './recetas-detalles.component.html',
  styleUrls: ['./recetas-detalles.component.css']
})
export class RecetasDetallesComponent implements OnInit {
@Input()recetaDetalle:Receta//Elemento recibido del componente padre: recetas.component
  constructor(private recetasServicio:RecetasServicio) { }

  ngOnInit(): void {
    console.log(this.recetaDetalle.nombre)
  }

  anadirListaCompras(){//pasamos los ingredientes seleccionados a otro servicio :asi podemos usar un servicio dentro de otro
    //Actulizamos la vista de  listado de compras desde este componente  pasando los ingredientes seleccionados
      this.recetasServicio.anadirIngredientesaListaCompras(this.recetaDetalle.ingredientes)//Pasamos  el array de ingredientes
//console.log(this.recetaDetalle.ingredientes)
  }

}
