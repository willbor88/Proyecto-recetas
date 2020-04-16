import { Component, OnInit, Input,EventEmitter, ViewChild, ElementRef, Output  } from '@angular/core';
import { Receta } from 'src/app/recetas/reseta.model';
import { Ingrediente } from 'src/shared/ingrediente.model';


@Component({
  selector: 'app-compras-edicion',
  templateUrl: './compras-edicion.component.html',
  styleUrls: ['./compras-edicion.component.css']
})
export class ComprasEdicionComponent implements OnInit {
 @ViewChild('nombreInput') nombre: ElementRef
 @ViewChild('cantidadInput') cantidad: ElementRef
@Output() objetoEmisor= new EventEmitter<Ingrediente>()//generico para enviar un objeto completo


  constructor() { }

  ngOnInit(): void {
  }


  enviarElemento(){
    const nuevoIngrediente= new Ingrediente(this.nombre.nativeElement.value, this.cantidad.nativeElement.value,)
this.objetoEmisor.emit(nuevoIngrediente)
  }

}
