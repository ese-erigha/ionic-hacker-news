import * as fromRoot from '../../store/reducers';
import * as newsActions from './news.actions';
import {Feed} from '../../store/models/feed.model';

//section 1
export interface NewsState{
    loading: boolean,
    new: object,
    top: object,
    best: object,
    ask: object,
    show: object,
    job: object,
    feeds: Array<Feed>,
    error: object,
    currentFeed: string,
    story: {}
}

//section 2
export const initialState : NewsState = {

    loading: false,
    new: {},
    top: {},
    best: {},
    ask: {},
    show: {},
    job: {},
    feeds: [],
    error: {},
    currentFeed: "",
    story: {}
}


export function reducer(state: NewsState = initialState, action: {type,payload}) {

    // Section 3
    switch(action.type) {

        case newsActions.LOAD_FEEDS:
            return {...state, loading: true};

        case newsActions.LOAD_FEEDS_PENDING:
            return {...state, loading: true, ...action.payload};

        case newsActions.LOAD_FEEDS_SUCCESS:
            return {...state, loading: false, ...action.payload}

        case newsActions.LOAD_FEEDS_ERROR:
            return {...state, loading: false, ...action.payload}

        case newsActions.LOAD_ITEM:
             return {...state, loading: true};
        
        case newsActions.LOAD_ITEM_PENDING:
             return {...state, loading: true,...action.payload};

        case newsActions.LOAD_ITEM_SUCCESS:
             return {...state, loading: false, ...action.payload};

        case newsActions.LOAD_ITEM_ERROR:
             return {...state, loading: false, story: {}};

        default:
            return state;
    }
}

export interface State extends fromRoot.State {
    'newsState': NewsState
}

//export const getFeedState = createFeatureSelector<FeedState>('feedState');

//export const getTop = createSelector(getFeedState,(state: FeedState) => state.top);