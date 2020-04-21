import { Injectable,EventEmitter } from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';


@Injectable()
export class CompraListadoServicio {
    constructor(){}
actulizarIngredientes= new EventEmitter<Ingrediente[]>()

private ingrediente:Ingrediente[]=[
    new Ingrediente ('Manzana',5),
    new Ingrediente ('Tomates',10),
]

anadirIngrediente(nuevoIngrediente:Ingrediente){
    this.ingrediente.push(nuevoIngrediente)
    this.actulizarIngredientes.emit(this.ingrediente)//emitimos el array actulizado cuando añandimos ingredientes
}

extraerIngredientes(){
    return this.ingrediente.slice()
}

anadirVariosIngredientes(nuevosIngredientes:Ingrediente[]){//añadimos varios ingredientes al array ingrediente
//  for (const ingrediente of nuevosIngredientes) {
//      this.anadirIngrediente(ingrediente)
//  }

this.ingrediente.push(...nuevosIngredientes)//extrae los elementos del array nuevosIngredientes y los añade en forma de lista al array ingrediente
this.actulizarIngredientes.emit(this.ingrediente.slice())
}

}

