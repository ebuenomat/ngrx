//O store vai ser sempre a fonte única de verdade, ele vai centralizar toda a informação.
//Sempre que um componente precisar de uma informação do estado da aplicação, ele vai consultar o store.

import { UsuariosState } from "./usuarios/usuarios.reducer";

export interface AppState {
    usuarios: UsuariosState
}