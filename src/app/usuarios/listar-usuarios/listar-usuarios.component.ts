import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { UsuariosService } from '../../core/usuarios.service';
import { Usuario } from 'src/app/shared/models/usuario';
import { EditarUsuariosComponent } from '../editar-usuarios/editar-usuarios.component';
import { CadastrarUsuariosComponent } from '../cadastrar-usuarios/cadastrar-usuarios.component';
import { DeletarUsuariosComponent } from '../deletar-usuarios/deletar-usuarios.component';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})


export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  id!: number;
  usuario!: string;
  index!: number;
  exampleDatabase!: UsuariosService | any;

  displayedColumns: string[] = ['select', 'id', 'imagem', 'nome', 'email', 'contatoAlt', 'funcao', 'departamento', 'editar', 'excluir'];
  dataSource = new MatTableDataSource<Usuario>(this.usuarios);
  selection = new SelectionModel<Usuario>(true, []);

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getLista();
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Usuario): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  filteredData: Usuario[] = [];

  getLista(): void {
    this.usuariosService.listar().subscribe(usuarios => {
      this.usuarios = usuarios;
      this.dataSource = new MatTableDataSource(this.usuarios);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.changeDetectorRefs.detectChanges();
  }

  cadastrarUsuario() {
    const dialogRef = this.dialog.open(CadastrarUsuariosComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit()
    });
  }

  botaoEditar(i: number, id: number, imagem: string, nome: string, email: string, contatoAlt: string, funcao: string, departamento: string): void {
    this.id = id;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditarUsuariosComponent, {
      data: { id: id, imagem: imagem, nome: nome, email: email, contatoAlt: contatoAlt, funcao: funcao, departamento: departamento }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit()
    });
  }

  botaoDeletar(i: number, id: number, imagem: string, nome: string, email: string, contatoAlt: string, funcao: string, departamento: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeletarUsuariosComponent, {
      data: { id: id, imagem: imagem, nome: nome, email: email, contatoAlt: contatoAlt, funcao: funcao, departamento: departamento }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit()
    });
  }
  
}
