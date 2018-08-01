import * as fromRoot from '../../store/reducers';
import * as userActions from './user.actions';
import {User} from '../../store/models/user.model';

//section 1
export interface UserState{
    loading: boolean,
    user: User
}

//section 2
export const initialState : UserState = {

    loading: true,
    user: {
        id: 0,
        delay: 0,
        created: new Date(),
        karma: 0,
        about: "",
        submitted: []
    }
}


export function reducer(state: UserState = initialState, action: {type,payload}) {

    // Section 3
    switch(action.type) {

        case userActions.LOAD_USER:
            return {...state, loading: true};

        case userActions.LOAD_USER_PENDING:
            return {...state, loading: true, ...action.payload};

        case userActions.LOAD_USER_SUCCESS:
            return {...state, loading: false, ...action.payload}

        case userActions.LOAD_USER_ERROR:
            return {...state, loading: false, user:{}}

        default:
            return state;
    }
}

export interface State extends fromRoot.State {
    'userState': UserState
}

//export const getFeedState = createFeatureSelector<FeedState>('feedState');
//export const getTop = createSelector(getFeedState,(state: FeedState) => state.top);