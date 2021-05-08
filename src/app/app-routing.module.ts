import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { UsuariosModule } from './usuarios/usuarios.module'


const routes: Routes = [

  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },

  {
    path: 'usuarios',
    children: [
      {
        path: '',
        component: ListarUsuariosComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UsuariosModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
