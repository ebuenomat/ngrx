import { Component, OnInit } from '@angular/core';
import { UserService } from '../Repositorio/userService';
import { UserModel } from '../Models/userModel';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/appState';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions'

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})

export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UserModel[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(fromUsuariosAction.LoadUsuarios())
  }

}
