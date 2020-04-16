import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Receta } from '../recetas/reseta.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input()receta:Receta
 @Output() pasarReceta= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(recetaString:string){

    this.pasarReceta.emit(recetaString);//Este objeto es pasado solo al  emelento que encrusta este mimso elemento (padre)

  }

}
