import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent implements OnInit {
ingredientes:Ingrediente[] =[
  new Ingrediente ('Manzana',5),
  new Ingrediente ('Tomates',10),
 
]
  constructor() { }

  ngOnInit(): void {
  }

}
