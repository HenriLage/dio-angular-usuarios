import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarUsuariosComponent } from 'src/app/usuarios/cadastrar-usuarios/cadastrar-usuarios.component';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cadastrarUsuario() {
    this.dialog.open(CadastrarUsuariosComponent);
  }

}
