import { Component, OnInit, Input, Output, } from '@angular/core';
import { Receta } from '../../reseta.model';
import { RecetasServicio } from 'src/app/recetas.servicios';



@Component({
  selector: 'app-receta-elementos',
  templateUrl: './receta-elementos.component.html',
  styleUrls: ['./receta-elementos.component.css']
})
export class RecetaElementosComponent implements OnInit {
  @Input() receta: Receta//Esta reciendo cada elemento desde el componente padre
  
  constructor(private recetaServicio:RecetasServicio) { }

  ngOnInit(): void {
  }

  enviarElemento(){
    this.recetaServicio.recetaSeleccionada.emit(this.receta)//Enviar mi objeto a otro componente usando un servicio
  }

}
