export  const ActionType = {
    AppType: {
        SHOW_LOADING: "app/SHOW_LOADING",
        HIDE_LOADING: "app/HIDE_LOADING",
        LOGIN_RESULT: "app/LOGIN_RESULT",
        LOG_OUT: "app/LOG_OUT",
        SHOW_INFOBOX: "app/SHOW_INFOBOX",
        HIDE_INFOBOX: "app/HIDE_INFOBOX",
        GAMELIST_RESULT: "app/GAMELIST_RESULT",
        PLAY_LIST_RESULT: "app/PLAT_LIST_RESULT",
    },
    FetchType: {
        FETCH_REQUEST: "fetch/REQUEST",
        FETCH_SUCCEED: "fetch/SUCCEED",
        FETCH_FAILED: "fetch/FAILED"
    },
    HomeType: {
        BANNERS_RESULT: "home/GET_BANNERS",
    },
    NoticeType: {
        NOTICE_DATA_LIST: "NoticeType/DATA_LIST",
    },
}
global.ActionType=ActionType;