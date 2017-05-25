import React from 'react';
import {
    View,
} from 'react-native';
import BaseView from "../../componet/BaseView";
import {connect} from 'react-redux';
import GameList from "./subview/GameList";
import MyBannerSwiper from "../../componet/MyBannerSwiper";
import {HeaderLeftDomain} from "../../componet/navBarMenu/HeaderMenu";
import ConfigView from "./subview/ConfigView";


const mapStateToProps = state => {
    return {
        bannerList: state.get("homeState").get("gameModel"),
        gameModel: state.get("appState").get("gameModel"),
        playModel: state.get("appState").get("playModel"),
        userData: state.get("appState").get("userData").toJS(),
    }
}

@connect(mapStateToProps)
export default class Home extends BaseView {
    constructor(props) {
        super(props);
        this.state =
            {
                modalVisible: false,
                domain:""
        };
    }

    setModalVisible=(visible)=> {
        this.setState({modalVisible: visible});
    }

    getNavigationBarProps() {
        return {leftView: HeaderLeftDomain};
    }

    renderBody() {
        let {bannerList, gameModel, playModel,userData} = this.props;
        let gameList = gameModel.gameInfoList;
        bannerList = [{
            url: `${SERVERADDR}/dist/i/home/home_activity_banner2.jpg`,
            name: "活动1",
            data: "http://www.baidu.com"
        }, {
            url: `${SERVERADDR}/dist/i/home/home_activity_banner2.jpg`,
            name: "活动2",
            data: "http://www.baidu.com"
        }, {
            url: `${SERVERADDR}/dist/i/home/home_activity_banner2.jpg`,
            name: "活动3",
            data: "http://www.google.com"
        }]

        return (
            <View style={GlobeStyle.appContentView} >
                <ConfigView modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>
                <MyBannerSwiper dataList={bannerList} {...this.props}/>
                <GameList dataList={gameList} gameModel={gameModel} playModel={playModel} userData={userData}/>
            </View>
        );
    }

    componentDidMount() {
        MyStorage.getItem(EnumStroeKeys.DO_MAIN, (data) => {
            if(data&&data!="")
            {
                SERVERADDR=data;
            }
            ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_GAME_LIST_INFO, ActionType.AppType.GAMELIST_RESULT, false);
            ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_PLAY_LIST_INFO, ActionType.AppType.PLAY_LIST_RESULT, false);
            ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_DATA_DEATIL, ActionType.AppType.MOBILE_TYPES_RESULT, false);
            //ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_BANG_CITY_INFO,ActionType.AppType.BANG_CITY_INFO,false);
        })
    }

    onLeftPressed() {
        this.setState({modalVisible: true});
    }
}
