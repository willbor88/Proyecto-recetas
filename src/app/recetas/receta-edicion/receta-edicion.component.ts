import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecetasServicio } from 'src/app/recetas.servicios';
import { Router } from "@angular/router";



@Component({
  selector: 'app-receta-edicion',
  templateUrl: './receta-edicion.component.html',
  styleUrls: ['./receta-edicion.component.css']
})
export class RecetaEdicionComponent implements OnInit {
id:number
modoEdicion=false
recetaForm:FormGroup
  constructor(private route:ActivatedRoute,
   private recetaServicio:RecetasServicio,
   private router:Router
    ) { }

  ngOnInit(): void {
//RECIBIMOS UN ID  DESDE LA URL PASADO POR OTRO COMPONENTE
    this.route.params.subscribe((parametros:Params)=>{
      this.id =+ parametros['id']
      this.modoEdicion = parametros['id'] != null//si no hay parametros modoEdicion sea true
      console.log(this.modoEdicion)
    })

    this.iniciarForm()
  }

submit(){
  //ACCEDER AL LOS VALORES DEL FORMGROUP
  //CREAR O INSTANCIAR UN OBJETO TIPO RECETA Y PASARLE VALORES
// const nuevaReceta= new Receta(
//   this.recetaForm.value['name'],
// this.recetaForm.value['imagePath'],
// this.recetaForm.value['descripcion'],
// this.recetaForm.value['ingredientess']

// )

//los cambios no se reflejan en el componente que los despliega solo con actuliar, debemos usar un observable tipo Subject para emitir los cambios
 if(this.modoEdicion)
 {
   //Podemos acceder al objeto recetaForm usando value
   this.recetaServicio.actualizarReceta(this.id, this.recetaForm.value)
 }

 else{

  this.recetaServicio.anadirReceta( this.recetaForm.value)
 }

this.cancelar()
}

  private iniciarForm(){
    
    let nombreReceta=''
    let recetaImagePath=''
    let descripcion=''
    let recetaIngredientes= new FormArray([])//Crear array para añadir elementos de un formulario

if(this.modoEdicion){
  const receta= this.recetaServicio.extraerUnicaReceta(this.id)
  nombreReceta=receta.nombre
  recetaImagePath =receta.imagePath
  descripcion=receta.descripcion
//SI existen ingredientes creo los FormGroup y lo Formcontrol añada los valoes seguna la cantidad de elementos del array (receta.ingredientes)
  if(receta['ingredientes']){
    for (const ingrediente of receta.ingredientes) {
      recetaIngredientes.push(
           new FormGroup({  //Añadimos cada formgroup y cada control de formulario
            'nombre': new FormControl(ingrediente.nombre,Validators.required),//Le damos un nombre y valor a cada control
          'cantidad': new FormControl(ingrediente.cant,[
            Validators.required,
            Validators.pattern('^[1-9]+[0-9]*$')
          ])
           })
      )
        }
  }
}

this.recetaForm= new FormGroup({
'nombre': new FormControl(nombreReceta,Validators.required),
'imagePath': new FormControl(recetaImagePath,Validators.required),
'descripcion': new FormControl(descripcion,Validators.required),
'ingredientess': recetaIngredientes ///Añadimos el form array con los elementos creados al formulario

})
  }

  anadirIngredientes(){
//Cast:Definir a typescript que tipo de dato es una variable
(<FormArray>this.recetaForm.get('ingredientess')).push(
  new FormGroup({
    //Pasando parameros para validar, iniciamos en null para no cargar ningun valor en el input
'nombre':new FormControl(null,[Validators.required]),
'cantidad':new FormControl(null,[Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
  })
)
  }

  cancelar(){

this.router.navigate(['../'], {relativeTo:this.route})
  }

  borraIngrediente(index:number){
 
(<FormArray>this.recetaForm.get('ingredientess')).removeAt(index )//Eliminar un elemento del array recetaForm

  }

}
