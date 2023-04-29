import {HttpClient, HttpHeaders} from '@angular/common/http'
import { UserModel } from '../Models/userModel';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient) {

    }

    getUsuarios() {
        return this.http.get<UserModel[]>('http://localhost:3000/usuarios');
    }

    getUsuario(id:number) {
        return this.http.get<UserModel>('http://localhost:3000/usuarios' + id);
    }

    addUsuario(user:UserModel) {
        let headers = new HttpHeaders();
        headers = headers.set('content-type', 'application/json; charset=utf-8')

        return this.http.post('http://localhost:3000/usuarios', JSON.stringify(user), {headers: headers})
    }

    updateUsuario(user:UserModel) {
        let headers = new HttpHeaders();
        headers = headers.set('content-type', 'application/json; charset=utf-8')

        return this.http.put<UserModel>('http://localhost:3000/usuarios' + user.id, JSON.stringify(user), {headers: headers})
    }

    deleteUsuario(id:number) {
        let headers = new HttpHeaders();
        headers = headers.set('content-type', 'application/json; charset=utf-8')

        return this.http.delete('http://localhost:3000/usuarios' + id, {headers: headers})
    }
}