import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Receta } from '../../reseta.model';



@Component({
  selector: 'app-receta-elementos',
  templateUrl: './receta-elementos.component.html',
  styleUrls: ['./receta-elementos.component.css']
})
export class RecetaElementosComponent implements OnInit {
  @Input() receta: Receta//Esta reciendo cada elemento desde el componente padre
  @Output() EnviandoElem= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  enviarElemento(){

this.EnviandoElem.emit(this.receta)
  }

}
