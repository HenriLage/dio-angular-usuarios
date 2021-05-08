import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, } from '@angular/material/dialog';

import { UsuariosService } from 'src/app/core/usuarios.service';
import { DialogSucessoComponent } from 'src/app/shared/dialog-sucesso/dialog-sucesso.component';
import { Usuario } from 'src/app/shared/models/usuario';


@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.css']
})
export class CadastrarUsuariosComponent implements OnInit {

  id!: number;
  cadastro!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    public dialogRef: MatDialogRef<CadastrarUsuariosComponent>
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo e-mail é obrigatório';
    }

    return this.email.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  iniciarFormulario(): void {
    this.cadastro = this.fb.group({
      nome: '',
      email: '',
      contatoAlt: '',
      imagem: '',
      funcao: '',
      departamento: '',
    })
  }

  submit(): void {
    console.log(this.cadastro.value);
    const usuario = this.cadastro.value as Usuario;
    this.usuariosService.salvar(usuario).subscribe();
    this.dialogRef.close();
    this.dialog.open(DialogSucessoComponent);
  }

}
