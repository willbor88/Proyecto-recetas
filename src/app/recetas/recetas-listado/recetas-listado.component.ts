import { Component, OnInit,} from '@angular/core';
import { Receta } from '../reseta.model';
import { RecetasServicio } from "../../recetas.servicios";

@Component({
  selector: 'app-recetas-listado',
  templateUrl: './recetas-listado.component.html',
  styleUrls: ['./recetas-listado.component.css']
})
export class RecetasListadoComponent implements OnInit {
 
  recetas: Receta[]=[]

  constructor(private recetasServico:RecetasServicio) { }
  
  ngOnInit( ){

  this.recetas = this.recetasServico.extraerReceta()
  }
  
  

}
