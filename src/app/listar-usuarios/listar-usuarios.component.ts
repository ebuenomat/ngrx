import { Component, OnInit } from '@angular/core';
import { UserService } from '../Repositorio/userService';
import { UserModel } from '../Models/userModel';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: UserModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUsuarios().subscribe((usuarios) => {
      this.listaUsuarios = usuarios;
    })
  }

}
