import {Action} from '@ngrx/store';

export interface feedQuery{
    type: string,
    pageNumber: number
}

export interface itemQuery{
    id: number
}

export const LOAD_FEEDS = '[Load] Feeds';
export const LOAD_FEEDS_SUCCESS = '[Load] Feeds Success';
export const LOAD_FEEDS_PENDING = '[Load] Feeds Pending';
export const LOAD_FEEDS_ERROR = '[Load] Feeds Error';

export class LoadFeedsAction implements Action {
    type = LOAD_FEEDS;
    constructor(public payload: feedQuery){}
}

export class LoadFeedsSuccessAction implements Action {
    type = LOAD_FEEDS_SUCCESS;

    constructor(public payload: object){}
}

export class LoadFeedsPendingAction implements Action {
    type = LOAD_FEEDS_PENDING;

    constructor(public payload: object){}
}

export class LoadFeedsErrorAction implements Action {
    type = LOAD_FEEDS_ERROR;

    constructor(public payload: object){}
}

export const LOAD_ITEM = '[Load] Item';
export const LOAD_ITEM_SUCCESS = '[Load] Item Success';
export const LOAD_ITEM_PENDING = '[Load] Item Pending';
export const LOAD_ITEM_ERROR = '[Load] Item Error';

export class LoadItemAction implements Action {
    type = LOAD_ITEM;
    constructor(public payload: object){}
}

export class LoadItemSuccessAction implements Action {
    type = LOAD_ITEM_SUCCESS;

    constructor(public payload: object){}
}

export class LoadItemPendingAction implements Action {
    type = LOAD_ITEM_PENDING;

    constructor(public payload: object){}
}

export class LoadItemErrorAction implements Action {
    type = LOAD_ITEM_ERROR;

    constructor(public payload: object){}
}



