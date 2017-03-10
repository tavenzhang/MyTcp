import {ActionType} from "../action/ActionType";

const initFetchState = {
    requesting : false,
    fail: false,
    success: true
}


const fetchState = (state = initFetchState, action) => {
    switch (action.type){
        case ActionType.FetchType.FETCH_REQUEST :
            return Object.assign({}, state, {
                requesting: true,
                fail: false,
                success: false
            });
        case ActionType.FetchType.FETCH_FAILED :
            return Object.assign({}, state, {
                requesting: false,
                fail: true,
                success: false
            });
        case ActionType.FetchType.FETCH_SUCCEED :
            return Object.assign({}, state, {
                requesting: false,
                fail: false,
                success: true
            });
        default:
            return state;
    }
}

export default fetchState;