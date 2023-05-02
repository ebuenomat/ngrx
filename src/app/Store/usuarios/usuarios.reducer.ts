import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserModel } from "src/app/Models/userModel";
import * as fromUsuariosAction from "src/app/Store/usuarios/usuarios.actions"

export interface UsuariosState {
    usuarios: UserModel[],
    usuario: UserModel | null,
    error: string | ''
}

export const initialState: UsuariosState = {
    usuarios: [],
    usuario: null,
    error: ''
}

//Lembrar que ao utilizar _variável, significa que a variável é privada, ou seja, apenas métodos da propria classe/objeto, podem acessa-los.
const _usuariosReducer = createReducer(
    initialState,
    on(fromUsuariosAction.LoadUsuariosSucess,(state, {payload}) => ({... state, usuarios: payload, error: ''})),
    on(fromUsuariosAction.LoadUsuariosFail,(state, {error}) => ({... state, error: error})),

    on(fromUsuariosAction.LoadUsuarioSucess,(state, {payload}) => ({... state, usuario: payload, error: ''})),
    on(fromUsuariosAction.LoadUsuarioFail,(state, {error}) => ({... state, error: error})),

    on(fromUsuariosAction.CreateUsuarioSucess,(state, {payload}) => ({... state, usuarios: [...state.usuarios, payload], error: ''})),
    on(fromUsuariosAction.CreateUsuarioFail,(state, {error}) => ({... state, error: error})),

    on(fromUsuariosAction.UpdateUsuarioSucess,(state, {payload}) => ({
        ... state,
        usuarios: [...state.usuarios].map((row) => {
            if(row.id == payload.id) {
                return payload
            }else {
                row
            }
        }),
        error: ''})),
    on(fromUsuariosAction.UpdateUsuarioFail,(state, {error}) => ({... state, error: error})),

    on(fromUsuariosAction.DeleteUsuarioSucess,(state, {payload}) => ({
        ... state,
        usuarios: [...state.usuarios].filter((filter) => filter.id != payload),
        error: ''})),
    on(fromUsuariosAction.DeleteUsuarioFail,(state, {error}) => ({... state, error: error})),
) 

export function usuariosReducer(state = initialState, action: Action) {
    return _usuariosReducer(state, action)
}

const getUsuariosFeatureState = createFeatureSelector<UsuariosState>('usuarios') //"usuarios" é o nome específico para acessar

export const getUsuarios = createSelector(getUsuariosFeatureState, (state: UsuariosState) => state.usuarios)

export const getUsuario = createSelector(getUsuariosFeatureState, (state: UsuariosState) => state.usuario)

export const getUsuarioErro = createSelector(getUsuariosFeatureState, (state: UsuariosState) => state.error)

//filtrando somente usuario com perfil administrador
export const getUsuariosAdmin = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((filteradmin) => filteradmin.perfil == 'Administrador')
    )