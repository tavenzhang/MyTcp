
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
    gamesDic:{arrayList:[]},
    playsDic:{arrayList:[]},
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
            AppData.userData=action.data;
            AppData.isLogined=true;
            return {...state, userData: action.data, isLogined: true}
        case ActionType.AppType.LOG_OUT:
            AppData.userData=null;
            AppData.isLogined=false;
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
            return {...state,
                infoBox: {
                    show: false,
                    msg: '',
                    style: ''
                }
            };
        case ActionType.AppType.GAMELIST_RESULT:
            action.httpResult.arrayList=[];
            for(let key in action.httpResult){
                action.httpResult[key].img="http://p.lgfxiu.com/43cadf050bb5ec86043a99343b2608ee";
                if(action.httpResult[key].name)
                {
                    action.httpResult.arrayList.push(action.httpResult[key]);
                }
            }
            return {...state,gamesDic:action.httpResult};
        case ActionType.AppType.PLAY_LIST_RESULT:
            //玩法数据预处理
            for(let key in action.httpResult){
                if(action.httpResult[key]["children"])
                {
                    let tmpList=[];
                    for(let subKey in action.httpResult[key]["children"])
                    {
                        tmpList.push(action.httpResult[key]["children"][subKey]);
                    }
                    action.httpResult[key].arrayList=tmpList;
                }
            }
            return {...state, playsDic:action.httpResult};
        default:
            return state;
    }
}
export default appState
