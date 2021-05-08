import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UsuariosService } from 'src/app/core/usuarios.service';

@Component({
  selector: 'app-deletar-usuarios',
  templateUrl: './deletar-usuarios.component.html',
  styleUrls: ['./deletar-usuarios.component.css']
})
export class DeletarUsuariosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletarUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.dialogRef.close();
  }
  confirmar(): void {
    this.usuariosService.excluir(this.data.id).subscribe();
  }

}
