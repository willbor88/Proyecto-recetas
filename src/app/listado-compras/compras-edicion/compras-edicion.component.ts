import { Component, OnInit, ViewChild, ElementRef, Output  } from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';
import { CompraListadoServicio } from '../compras-listado.service';


@Component({
  selector: 'app-compras-edicion',
  templateUrl: './compras-edicion.component.html',
  styleUrls: ['./compras-edicion.component.css']
})
export class ComprasEdicionComponent implements OnInit {
 @ViewChild('nombreInput') nombre: ElementRef
 @ViewChild('cantidadInput') cantidad: ElementRef



  constructor(private comprasListadoServicio:CompraListadoServicio) { }

  ngOnInit(): void {
  }


  enviarElemento(){
    const nuevoIngrediente = new Ingrediente(this.nombre.nativeElement.value, this.cantidad.nativeElement.value)
    this.comprasListadoServicio.anadirIngrediente(nuevoIngrediente)

  }

// enviarElemento(){

//   const nuevoIngrediente = new Ingrediente(this.nombre.nativeElement.value, this.cantidad.nativeElement.value)
//   this.recetasServicio.anadirIngrediente(nuevoIngrediente)


// }

}
