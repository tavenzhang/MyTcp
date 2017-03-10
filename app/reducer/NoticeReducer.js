import {ActionType} from "../action/ActionType";;

const initNoticeState = {
    awardMondy:0,
    noticeList:[],
}

const noticState = (state = initNoticeState, action) => {
    switch (action.type) {
        case ActionType.NoticeType.NOTICE_DATA_LIST:
            return {...state,noticeList:[],awardMondy:0};
        default:
            return state;
    }
}

export default noticState