
const SERVERADDR = "http://104.250.140.242:8081";

const METHOD_GET = "GET";
const METHOD_POST = "POST";

//接口配置
const HTTP_SERVER = {
    //获取接口配置详情
    GET_DATA_DEATIL:{url:`${SERVERADDR}/mobile-types`},
    //获取游戏列表
    GET_GAME_LIST_INFO:{url:`${SERVERADDR}/dist/js/data/lottery-series.json`},
    //获取玩法列表
    GET_PLAY_LIST_INFO:{url:`${SERVERADDR}/dist/js/data/series-way-groups-way-group-ways.json`},
    //获取银行卡city 信息
    GET_BANG_CITY_INFO:{url:`${SERVERADDR}/dist/js/data/districts.json`},
    //登陆
    LOGIN_IN: {url:`${SERVERADDR}/mobile-auth/login`, method:METHOD_POST,body:{username:"",password:""}},
    //登出
    LOGIN_OUT: {url:`${SERVERADDR}/mobile-auth/logout`, method:METHOD_POST,body:{}},
    //获取投注列表
    GET_BET_WIN:{url:`${SERVERADDR}/mobile-projects/get-win-bet`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //2017-02-22  15:47:00 投注记录
    BET_RECODE:{url:`${SERVERADDR}/mobile-projects`,method:METHOD_POST,body:{bought_at_from:"",bought_at_to:"",issue:"",serial_number:"",lottery_id:"",way_id:"",username:"",user_id:"",page:1,pagesize:20}},
    BET_DETAIL:{url:"",formatUrl:`${SERVERADDR}/mobile-projects/#id/view`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //追号记录
    CHASE_RECODE:{url:`${SERVERADDR}/mobile-traces`,method:METHOD_POST,body:{bought_at_from:"",bought_at_to:"",issue:"",serial_number:"",lottery_id:"",way_id:"",username:"",user_id:"",page:1,pagesize:20}},
    //追号详情
    CHASE_DETAIL:{url:"",formatUrl:`${SERVERADDR}/mobile-traces/#id/view`,method:METHOD_POST,body:{}},
    //获取站内信列表
    LETTER_LIST:{url:`${SERVERADDR}/mobile-station-letters`, method:METHOD_POST,body:{}},
    LETTER_DETAIL:{url:"",formatUrl:`${SERVERADDR}/mobile-station-letters/#id/view`,method:METHOD_POST,body:{}},
    //获取系统公告
    GET_LIST_SYSTEM:{url:`${SERVERADDR}/mobile-announcements`, method:METHOD_POST,body:{}},
    GET_SYSTEM_DETAIL:{url:"",formatUrl:`${SERVERADDR}/mobile-announcements/#id/view`, method:METHOD_POST,body:{}},
    Domain:`${SERVERADDR}`,
    //资金明细
    LIST_REANSACTON:{url:`${SERVERADDR}/mobile-transactions/index`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //充值明细
    LIST_ADD_MONEY:{url:`${SERVERADDR}/mobile-transactions/my-deposit`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //提现帐变
    LIST_DRAW:{url:`${SERVERADDR}/mobile-transactions/my-withdraw`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //派奖明细
    LIST_AWARD_MONEY:{url:`${SERVERADDR}/mobile-transactions/send-prize`,method:METHOD_POST,body:{page:1,pagesize:20}},
    //转账明细
    LIST_TRANSLATE_MONEY:{url:`${SERVERADDR}/mobile-transactions/my-transfer`,method:METHOD_POST,body:{page:1,pagesize:20}},
    // 修改登陆密码
    PWD_LOGIN:{url:`${SERVERADDR}/mobile-users/password-management/0`, method:METHOD_POST,body:{old_password:"",password:"",password_confirmation:""}},
    // 修改资金密码
    PWD_FUND:{url:`${SERVERADDR}/mobile-users/password-management/1`, method:METHOD_POST,body:{old_fund_password:"",fund_password:"",fund_password_confirmation:""}},
    //设置资金密码
    PWD_CONFIG_FUND:{url:`${SERVERADDR}/mobile-users/safe-reset-fund-password`, method:METHOD_POST,body:{fund_password:"",fund_password_confirmation:""}},
    //mobile-bank-cards/银行卡列表
    LIST_BANGK_CARDS:{url:`${SERVERADDR}/mobile-bank-cards`,method:METHOD_POST,body:{page:1,pagesize:15}},
    //删除bangkCard
    BANK_CARDS_DEL:{url:`${SERVERADDR}/mobile-bank-cards/destroy`,method:METHOD_POST,body:{id:1,account_name:"",account:"",fund_password:""}},
    // step1验证旧银行卡信息:
    BANK_CARD_ADD_STEP_0:{url:`${SERVERADDR}/mobile-bank-cards/0/bind-card`,method:METHOD_POST,body:{id:1,account_name:"",account:"",fund_password:""}},
    // step2获取增加银行的数据
    BANK_CARD_ADD_STEP_1:{url:`${SERVERADDR}/mobile-bank-cards/1/bind-card`,method:METHOD_POST,body:{}},
    //step3提交确认银行卡信息
    BANK_CARD_ADD_STEP_2:{url:`${SERVERADDR}/mobile-bank-cards/2/bind-card`,method:METHOD_POST,body:{bank_id:1,branch:0,province_id:0,city_id:0,account_name:"",account:"",account_confirmation:"",fund_password:""}},
    //添加银行卡 step1验证旧银行卡信息:
    BANK_CARD_MODIFY_STEP_O:{url:"",formatUrl:`${SERVERADDR}/mobile-bank-cards/0/#id/modify-card`,method:METHOD_POST,body:{id:1,account_name:"",account:"",fund_password:""}},
    //step2获取增加银行的数据
    BANK_CARD_MODIFY_STEP_1:{url:"",formatUrl:`${SERVERADDR}/mobile-bank-cards/1/#id/modify-card`,method:METHOD_POST,body:{}},
    //step3提交确认银行卡信息
    BANK_CARD_MODIFY_STEP_2:{url:"",formatUrl:`${SERVERADDR}/mobile-bank-cards/2/#id/modify-card`,method:METHOD_POST,body:{bank_id:1,branch:0,province_id:0,city_id:0,account_name:"",account:"",account_confirmation:"",fund_password:""}},
    //   转账信息：POST:/mobile-transfers/index/{user_id?}
    TRANSFER_GETINFO:{url:"",formatUrl:`${SERVERADDR}/mobile-transfers/index/#id`,method:METHOD_POST,body:{}},
    //转账提交 POST:/mobile-transfers/transfer-to-sub
    TRANSFER_SUB_MINT:{url:`${SERVERADDR}/mobile-transfers/transfer-to-sub`,method:METHOD_POST,body:{card_number:"",card_id:"",fund_password:"",amount:0,username:""}}
};
global.HTTP_SERVER=HTTP_SERVER

const AppData={
    userData: null,
    isLogined: false,
}
global.AppData=AppData;

