import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule } from '../shared/material/material.module';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { DeletarUsuariosComponent } from './deletar-usuarios/deletar-usuarios.component';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ListarUsuariosComponent, EditarUsuariosComponent, CadastrarUsuariosComponent, DeletarUsuariosComponent]
})


export class UsuariosModule { }
