import {ActionType} from "../action/ActionType";

const initHomeState = {
    bannerList:[]
}

const homeState = (state = initHomeState, action) => {

    switch (action.type) {
        case ActionType.HomeType.BANNERS_RESULT:
            return {...state, bannerList:action.bannerList};
        default:
            return state;
    }
}

export default homeState