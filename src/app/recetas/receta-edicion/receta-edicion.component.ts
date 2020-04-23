import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-receta-edicion',
  templateUrl: './receta-edicion.component.html',
  styleUrls: ['./receta-edicion.component.css']
})
export class RecetaEdicionComponent implements OnInit {
id:number
modoEdicion=false
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametros:Params)=>{
      this.id =+ parametros['id']
      this.modoEdicion = parametros['id'] != null//si no hay parametros modoEdicion sea true
      console.log(this.modoEdicion)
    })


  }

}
