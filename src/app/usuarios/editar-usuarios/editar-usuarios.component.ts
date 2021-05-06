import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/shared/models/usuario';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent {

  usuario!: Usuario;
  id!: number;
  cadastro!: FormGroup;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<EditarUsuariosComponent>,
              private fb: FormBuilder,
              private usuariosService: UsuariosService,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void{
    this.cadastro = this.fb.group({ 
      id: this.data.id,
      nome: this.data.nome,
      email: this.data.email,
      contatoAlt: this.data.contatoAlt,
      imagem: this.data.imagem,
      funcao: this.data.funcao,
      departamento: this.data.departamento,
    })
  }


  formControl = new FormControl('');

  submit(): void {
    console.log(this.cadastro.value);
    const usuario = this.cadastro.value as Usuario;
    
    this.usuariosService.editar(usuario).subscribe();
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  
  

}





