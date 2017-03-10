
const SERVERADDR = "http://104.250.140.242:8080";

const METHOD_GET = "GET";
const METHOD_POST = "POST";

//系列彩种：/dist/js/data/lottery-series.js
//玩法群与玩法：/dist/js/data/series-way-groups-way-group-ways.js
//接口配置
const HTTP_SERVER = {
    //获取游戏列表
    GET_GAME_LIST_INFO:{url:`${SERVERADDR}/dist/js/data/lottery-series.json`, method:METHOD_GET},
    //获取玩法列表
    GET_PLAY_LIST_INFO:{url:`${SERVERADDR}/dist/js/data/series-way-groups-way-group-ways.json`},
    LOGIN_IN: {url:`${SERVERADDR}/mobile-auth/login`, method:METHOD_POST,body:{username:"",password:""}},
    CHANGE_PWD:{url:`${SERVERADDR}/mobile-auth/changepwd`, method:METHOD_POST,body:{oldpwd:"",newpwd:"",pwdtype:""}},
    GET_BET_WIN:{url:`${SERVERADDR}/mobile-projects/get-win-bet`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //2017-02-22  15:47:00 投注记录
    BET_RECODE:{url:`${SERVERADDR}/mobile-projects`,method:METHOD_POST,body:{bought_at_from:"",bought_at_to:"",issue:"",serial_number:"",lottery_id:"",way_id:"",username:"",user_id:"",page:1,pagesize:20}},
    BET_DETAIL:{url:`${SERVERADDR}/mobile-projects/#id/view`,method:METHOD_POST,body:{}},
    //追号记录
    CHASE_RECODE:{url:`${SERVERADDR}/mobile-traces`,method:METHOD_POST,body:{bought_at_from:"",bought_at_to:"",issue:"",serial_number:"",lottery_id:"",way_id:"",username:"",user_id:"",page:1,pagesize:20}},
    CHASE_DETAIL:{url:`${SERVERADDR}/mobile-traces/#id/view`,method:METHOD_POST,body:{}},
};

global.HTTP_SERVER=HTTP_SERVER

const AppData={
    userData: null,
    isLogined: false,
}
global.AppData=AppData;

