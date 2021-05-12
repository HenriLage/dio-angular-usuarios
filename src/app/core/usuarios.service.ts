import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Usuario } from '../shared/models/usuario';


const url = 'http://localhost:3000/usuarios/';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  dialogData: any;

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(url, usuario);
  }

  editar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(url + usuario.id, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(url)
  }

  visualizar(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }

  getDialogData() {
    return this.dialogData;
  }
  
}
