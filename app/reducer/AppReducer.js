import GameModel from "../model/GameModel";
import PlayModel from "../model/PlayModel";
import MobileTypes from "../model/typesModel";
const initAppState = {
    requesting: false,
    fail: false,
    success: true,
    userData: null,
    isLogined: false,
    infoBox: {
        show: false, //是否显示
        msg: "",//显示内容
        style: 'success'//success成功，error错误
    },
    playsDic: {arrayList: []},
    gameModel: new GameModel (),
    playModel: new PlayModel(),
    typesModel:new MobileTypes()
}
const appState = (state = initAppState, action) => {
    switch (action.type) {
        case ActionType.AppType.SHOW_LOADING :
            return Object.assign({}, state, {
                requesting: true,
                fail: false,
                success: false
            });
        case ActionType.AppType.HIDE_LOADING :
            return Object.assign({}, state, {
                requesting: false,
                fail: false,
                success: true
            });
        case ActionType.AppType.LOGIN_RESULT:
            AppData.userData = action.data;
            AppData.isLogined = true;
            return {...state, userData: action.data, isLogined: true}
        case ActionType.AppType.LOG_OUT:
            AppData.userData = null;
            AppData.isLogined = false;
            return {...state, userData: null, isLogined: false}
        case ActionType.AppType.SHOW_INFOBOX:
            return {
                ...state, infoBox: {
                    show: true,
                    msg: action.msg,
                    style: action.style
                }
            };
        case ActionType.AppType.HIDE_INFOBOX:
            return {
                ...state,
                infoBox: {
                    show: false,
                    msg: '',
                    style: ''
                }
            };
        case ActionType.AppType.GAMELIST_RESULT:
            return {...state, gameModel: new GameModel(action.httpResult)};
        case ActionType.AppType.PLAY_LIST_RESULT:
            return {...state, playModel: new PlayModel(action.httpResult)};
        case ActionType.AppType.MOBILE_TYPES_RESULT:
            return {...state, typesModel: new MobileTypes(action.httpResult)};
        default:
            return state;
    }
}
export default appState
