import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Receta } from './reseta.model';
import { DataStorageService } from 'src/shared/data-storage.service';
import { RecetasServicio } from '../recetas.servicios';


@Injectable({providedIn:'root'})

export class RecetasResolverService implements Resolve <Receta []>{
//Resolver:Aseguara la cargar de data antes que la ruta se active para cargar el  componente

constructor( private dataStorageService:DataStorageService, private  recetasService:RecetasServicio){}

resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    //Codigo que espera mi componente
    const recetas= this.recetasService.extraerReceta()

    if (recetas.length === 0) {
        return  this.dataStorageService.extraccionRecetas()//Consulto mi data del servicion 
    }
    else{
        return recetas
    }
    
}
 
}