import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/userModel';
import { AppState } from '../Store/appState';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.scss']
})
export class CadastrarUsuariosComponent implements OnInit {
  model: UserModel = { id: 0, nome: '', idade: 0, perfil: ''}

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  addUsuario() {
      if(this.model.id == 0) {
        // this.userService.addUsuario(this.model).subscribe();
        this.store.dispatch(fromUsuariosAction.CreateUsuario({payload: this.model}));
      }else {
        console.log('atualizar', this.model);
        this.store.dispatch(fromUsuariosAction.UpdateUsuario({payload: this.model}))
      }
  }
}
