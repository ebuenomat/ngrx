import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/appState';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions'
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer'
import { Observable } from 'rxjs';
import { UserModel } from '../Models/userModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})

export class ListarUsuariosComponent implements OnInit {
  // listaUsuarios: UserModel[] = [];
  listaUsuarios$: Observable<UserModel[]> = this.store.select(fromUsuariosSelector.getUsuarios)

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.dispatch(fromUsuariosAction.LoadUsuarios())
  }

}
