import {
   InteractionManager,
} from 'react-native';
import AwardRecord from "../page/me/subView/AwardRecordView";
import BetRecord from "../page/me/subView/BetRecordView";
import ChaseRecord from "../page/me/subView/ChaseRecordView";
import MyMoneyView from "../page/me/subView/MyMoneyView";
import InMoneyView from "../page/me/subView/InMoneyView";
import OuterMoneyView from "../page/me/subView/OuterMoneyView";
import ChangePwd from "../page/me/subView/ChangePwd";
import CardManageView from "../page/me/subView/CardManageView";
import MsgView from "../page/me/subView/MailView";
import TabbarView from "../page/TabbarView";
import RegView from "../page/me/subView/RegView";
import LoginView from "../page/me/subView/LoginView";
import Fast3Notice from "../page/award/subView/Fast3Notice";
import ADView from "../page/home/subview/ADView";
import AddCardView from "../page/me/subView/cardManage/AddCardView";
import BetDetailView from "../page/me/subView/betRecord/BetDetailView";
import ChaseDeatilView from "../page/me/subView/betRecord/ChaseDeatilView";
import MessageDetail from "../page/me/subView/message/MessageDetail";
import NoticeDeailView from "../page/notice/noticeDetail/NoticeDeailView";
import SD11Choose5 from "../page/home/subview/games/SD11Choose5";

// PushFromLeft
// FloatFromRight
// FloatFromLeft
// FloatFromBottom
// FloatFromBottomAndroid
// FadeAndroid
// HorizontalSwipeJump
// HorizontalSwipeJumpFromRight
// VerticalUpSwipeJump
// VerticalDownSwipeJump
global.Navgator=null;

let navigator;
//  sceneAnimation: Navigator.SceneConfigs.FloatFromBottom
//跳转页面集中控制 方便管理 和自定义动画

let NavViews= {
    ADView:(data)=>({"component": ADView, "passProps": data}),
    //tab页面
    TabbarView:()=>({component: TabbarView}),
    //注册
    RegView:(data)=> ({"component": RegView, "passProps": data}),
    //登陆
    LoginView:(data)=> ({"component": LoginView, "passProps": data}),
    //快3游戏通知
    Fast3Notice:(data)=>({"component": Fast3Notice, "passProps": data}),
    //个人中心页面
    AwardRecord: (data) => ({"name": "AwardRecordView", "component": AwardRecord, "passProps": data}),
    BetRecord: (data) => ({"name": "BetRecordView", "component": BetRecord, "passProps": data}),
    ChaseRecord: (data) => ({"name": "ChaseRecordView", "component": ChaseRecord, "passProps": data}),
    MyMoneyView: (data) => ({"name": "MyMoneyView", "component": MyMoneyView, "passProps": data}),
    InMoneyView: (data) => ({"name": "InMoneyView", "component": InMoneyView, "passProps": data}),
    OuterMoneyView: (data) => ({"name": "OuterMoneyView", "component": OuterMoneyView, "passProps": data}),
    ChangePwd:(data) => ({"name": "ChangePwd", "component": ChangePwd, "passProps": data}),
    CardManageView:(data) => ({"name": "CardManageView", "component": CardManageView, "passProps": data}),
    MsgView:(data) => ({"name": "MailView", "component": MsgView, "passProps": data}),
    //游戏玩法
    SD11Choose5:(data)=>({"component": SD11Choose5, "passProps": data}),
    //添加银行卡
    AddCardView:(data)=>({"component": AddCardView, "passProps": data}),
    BetDetailView:(data)=>({"component": BetDetailView, "passProps": data}),
    ChaseDeatilView:(data)=>({"component": ChaseDeatilView, "passProps": data}),
    MessageDetail:(data)=>({"component": MessageDetail, "passProps": data}),
    NoticeDeailView:(data)=>({"component": NoticeDeailView, "passProps": data}),

}


global.NavViews=NavViews;


const NavUtil = {
    pushToView: (data) => {
        InteractionManager.runAfterInteractions(() => {
            Navgator.push(data);
        });
    },
    resetToView: (data) => {
        InteractionManager.runAfterInteractions(() => {
            Navgator.resetTo(data);
        });
    },
    pop: () => {
        Navgator.pop();
    },
}
global.NavUtil = NavUtil





