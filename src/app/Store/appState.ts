//O store vai ser sempre a fonte única de verdade, ele vai centralizar toda a informação.
//Sempre que um componente precisar de uma informação do estado da aplicação, ele vai consultar o store.

import { ActionReducerMap } from "@ngrx/store";
import { UsuariosState, usuariosReducer } from "./usuarios/usuarios.reducer";
import { UsuariosEffects } from './usuarios/usuarios.effects';

export interface AppState {
    usuarios: UsuariosState
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
}

export const appEffects = [
    UsuariosEffects
]
 