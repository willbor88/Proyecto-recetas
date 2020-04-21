import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';
import { CompraListadoServicio } from './compras-listado.service';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent implements OnInit {
ingredientes:Ingrediente[] =[]
  
 

  constructor( private compraListadoServicio:CompraListadoServicio) { }

  ngOnInit(): void {
    this.ingredientes = this.compraListadoServicio.extraerIngredientes()
    this.compraListadoServicio.actulizarIngredientes.subscribe((NuevosIngre:Ingrediente[])=>{//Recibimos el array actulizado
      this.ingredientes= NuevosIngre //Actulizamos la vista 
    })
  }

 

}
