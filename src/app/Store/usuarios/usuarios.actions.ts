import { createAction, props } from "@ngrx/store";
import { error } from "protractor";
import { UserModel } from "src/app/Models/userModel";

export const enum usuariosTypeActions {
    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
    LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

    CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
    CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

    UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
    UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

    DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
    DELETE_USUARIO_SUCCESS = '[ DELETE_USUARIO_SUCCESS]  DELETE USUARIO SUCCESS',
    DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

//Load Usuarios

// A função createAction retorna uma função, que quando chamada retorna um objeto no formato da interface Action. 
// O método props é usado para definir quaisquer metadados adicionais necessários para o tratamento da ação
export const LoadUsuarios = createAction(
    usuariosTypeActions.LOAD_USUARIOS
);

export const LoadUsuariosSucess = createAction(
    usuariosTypeActions.LOAD_USUARIOS_SUCCESS,
    props<{payload: UserModel[]}>()
);

export const LoadUsuariosFail = createAction(
    usuariosTypeActions.LOAD_USUARIOS_FAIL,
    props<{error: string}>()
);

//Load Usuario
export const LoadUsuario = createAction(
    usuariosTypeActions.LOAD_USUARIO,
    props<{payload: number}>()
);

export const LoadUsuarioSucess = createAction(
    usuariosTypeActions.LOAD_USUARIO_SUCCESS,
    props<{payload: UserModel}>()
);

export const LoadUsuarioFail = createAction(
    usuariosTypeActions.LOAD_USUARIO_FAIL,
    props<{error: string}>()
);

//create usuario
export const CreateUsuario = createAction(
    usuariosTypeActions.CREATE_USUARIO,
    props<{payload: UserModel}>()
);

export const CreateUsuarioSucess = createAction(
    usuariosTypeActions.CREATE_USUARIO_SUCCESS,
    props<{payload: UserModel}>()
);

export const CreateUsuarioFail = createAction(
    usuariosTypeActions.CREATE_USUARIO_FAIL,
    props<{error: string}>()
);

//update usuario
export const UpdateUsuario = createAction(
    usuariosTypeActions.UPDATE_USUARIO,
    props<{payload: UserModel}>()
);

export const UpdateUsuarioSucess = createAction(
    usuariosTypeActions.UPDATE_USUARIO_SUCCESS,
    props<{payload: UserModel}>()
);

export const UpdateUsuarioFail = createAction(
    usuariosTypeActions.UPDATE_USUARIO_FAIL,
    props<{error: string}>()
);

//delete usuario
export const DeleteUsuario = createAction(
    usuariosTypeActions.DELETE_USUARIO,
    props<{payload: number}>()
);

export const DeleteUsuarioSucess = createAction(
    usuariosTypeActions.DELETE_USUARIO_SUCCESS,
    props<{payload: number}>()
);

export const DeleteUsuarioFail = createAction(
    usuariosTypeActions.DELETE_USUARIO_FAIL,
    props<{error: string}>()
);