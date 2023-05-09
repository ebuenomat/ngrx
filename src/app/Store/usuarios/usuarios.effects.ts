import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { UserService } from "src/app/Repositorio/userService";
import * as fromUsuariosAction from "src/app/Store/usuarios/usuarios.actions"
import { UserModel } from '../../Models/userModel';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions, private userService: UserService ) {}

    loadUsuarios$ = createEffect(() => 
            this.actions$.pipe(
                ofType(fromUsuariosAction.usuariosTypeActions.LOAD_USUARIOS),
                exhaustMap(() => this.userService.getUsuarios()
                    .pipe(
                        map(payload => fromUsuariosAction.LoadUsuariosSucess({payload}),
                        catchError(error => of(fromUsuariosAction.LoadUsuariosFail({error})))
                        )
                    )
                )
            )
        )

    loadUsuario$ = createEffect(() => 
        this.actions$.pipe(
            ofType(fromUsuariosAction.usuariosTypeActions.LOAD_USUARIO),
            exhaustMap((user:any) => this.userService.getUsuario(user.payload)
                .pipe(
                    map(payload => fromUsuariosAction.LoadUsuarioSucess({payload}),
                    catchError(error => of(fromUsuariosAction.LoadUsuarioFail({error})))
                    )
                )
            )
        )
    )  

    createUsuario$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromUsuariosAction.usuariosTypeActions.CREATE_USUARIO),
            exhaustMap((user:any) => this.userService.addUsuario(user.payload)
                .pipe(
                    map((payload: UserModel) => fromUsuariosAction.CreateUsuarioSucess({payload}),
                    catchError(error => of(fromUsuariosAction.CreateUsuarioFail({error})))
                    )
                )  
            )
        )
    )

    updateUsuario$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromUsuariosAction.usuariosTypeActions.UPDATE_USUARIO),
            exhaustMap((user:any) => this.userService.updateUsuario(user.payload)
                .pipe(
                    map(payload => fromUsuariosAction.UpdateUsuarioSucess({payload}),
                    catchError(error => of(fromUsuariosAction.UpdateUsuarioFail({error})))
                    )
                )  
            )
        )
    )

    deleteUsuario$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromUsuariosAction.usuariosTypeActions.DELETE_USUARIO),
            exhaustMap((user:any) => this.userService.deleteUsuario(user.payload)
                .pipe(
                    map(() => fromUsuariosAction.DeleteUsuarioSucess({payload: user.payload}),
                    catchError(error => of(fromUsuariosAction.DeleteUsuarioFail({error})))
                    )
                )  
            )
        )
    )
                
}