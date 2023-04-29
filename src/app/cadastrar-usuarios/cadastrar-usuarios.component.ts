import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/userModel';
import { UserService } from '../Repositorio/userService';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.scss']
})
export class CadastrarUsuariosComponent implements OnInit {
  model: UserModel = { id: 0, nome: '', idade: 0, perfil: ''}

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  addUsuario() {
      if(this.model.id == 0) {
        this.userService.addUsuario(this.model).subscribe();
      }else {

      }
  }
}
