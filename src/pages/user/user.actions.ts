import {Action} from '@ngrx/store';

export interface userQuery{
    id: string
}


export const LOAD_USER = '[Load] User';
export const LOAD_USER_SUCCESS = '[Load] User Success';
export const LOAD_USER_PENDING = '[Load] User Pending';
export const LOAD_USER_ERROR = '[Load] User Error';

export class LoadUserAction implements Action {
    type = LOAD_USER;
    constructor(public payload: userQuery){}
}

export class LoadUserSuccessAction implements Action {
    type = LOAD_USER_SUCCESS;

    constructor(public payload: object){}
}

export class LoadUserPendingAction implements Action {
    type = LOAD_USER_PENDING;

    constructor(public payload: object){}
}

export class LoadUserErrorAction implements Action {
    type = LOAD_USER_ERROR;

    constructor(public payload: object){}
}