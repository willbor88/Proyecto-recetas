import { Component, OnInit,} from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import { Receta } from '../reseta.model';
import { RecetasServicio } from "../../recetas.servicios";


@Component({
  selector: 'app-recetas-listado',
  templateUrl: './recetas-listado.component.html',
  styleUrls: ['./recetas-listado.component.css']
})
export class RecetasListadoComponent implements OnInit {
 
  recetas: Receta[]=[]

  constructor(private recetasServico:RecetasServicio,private router:Router,
    private route:ActivatedRoute)
    //router nos permite navegar
    //route permite acceder a toda la iformacion de nuestra ruta actual

   { }
  
  ngOnInit( ){

  this.recetas = this.recetasServico.extraerReceta()
  }

  navegar(){
   // console.log(this.route)
    this.router.navigate(['nueva'],{relativeTo:this.route})
  }
  
  

}
