import { Component, OnInit, } from '@angular/core';
import { Receta } from '../reseta.model';
import { RecetasServicio } from 'src/app/recetas.servicios';
import { ActivatedRoute ,Params,Router} from "@angular/router";

@Component({
  selector: 'app-recetas-detalles',
  templateUrl: './recetas-detalles.component.html',
  styleUrls: ['./recetas-detalles.component.css']
})
export class RecetasDetallesComponent implements OnInit {
recetaDetalle:Receta
id:number

  constructor(private recetasServicio:RecetasServicio,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //El conponentes se esta cargado desde  el routerOutlet desde recetas component
    //consumir servicio
    //Pararecibir los cambios dinamicamente debemos usar un observable
    //Cargamos el conponente desde el servicio segun su id
   this.route.params.subscribe((parametros:Params)=>{
    this.id= + parametros['id']//Usamos l singno + para convertir el string a un tipo number
   this.recetaDetalle= this.recetasServicio.extraerUnicaReceta(this.id)
   })
     
  }

  anadirListaCompras(){//pasamos los ingredientes seleccionados a otro servicio :asi podemos usar un servicio dentro de otro
    //Actulizamos la vista de  listado de compras desde este componente  pasando los ingredientes seleccionados
      this.recetasServicio.anadirIngredientesaListaCompras(this.recetaDetalle.ingredientes)//Pasamos  el array de ingredientes
//console.log(this.recetaDetalle.ingredientes)
  }

  editarReceta(){
 //this.router.navigate(['edicion'],{relativeTo:this.route})
 this.router.navigate(['edicion'],{relativeTo:this.route})//NO necesitamos pasar parametro pues ya lo pasamos desde el componente  receta-elementos
  }

}
