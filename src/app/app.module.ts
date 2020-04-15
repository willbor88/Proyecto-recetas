import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetasListadoComponent } from './recetas/recetas-listado/recetas-listado.component';
import { RecetasDetallesComponent } from './recetas/recetas-detalles/recetas-detalles.component';
import { RecetaElementosComponent } from './recetas/recetas-detalles/receta-elementos/receta-elementos.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { ComprasEdicionComponent } from './listado-compras/compras-edicion/compras-edicion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    RecetasListadoComponent,
    RecetasDetallesComponent,
    RecetaElementosComponent,
    ListadoComprasComponent,
    ComprasEdicionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
