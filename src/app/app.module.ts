import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './shared/material/material.module';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './shared/topo/topo.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RodapeComponent } from './shared/rodape/rodape.component';
import { UsuariosService } from './core/usuarios.service';
import { DialogSucessoComponent } from './shared/dialog-sucesso/dialog-sucesso.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    DialogSucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    UsuariosModule,
    HttpClientModule

  ],
  exports: [
    MatTableModule,

  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
