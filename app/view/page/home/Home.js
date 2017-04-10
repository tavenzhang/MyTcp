import React from 'react';
import {
    View,
} from 'react-native';
import BaseView from "../../componet/BaseView";
import {connect} from 'react-redux';
import GameList from "./subview/GameList";
import MyBannerSwiper from "../../componet/MyBannerSwiper";

const mapStateToProps = state => {
    return {
        bannerList: state.get("homeState").get("gameModel"),
        gameModel:state.get("appState").get("gameModel"),
        playModel:state.get("appState").get("playModel")
    }
}

@connect(mapStateToProps)
export default class Home extends BaseView {

    constructor(props) {
        super(props);
    }

    renderBody() {
        let {bannerList,gameModel,playModel} = this.props;
        let gameList=gameModel.gameInfoList;
        bannerList = [{
            url: `${HTTP_SERVER.Domain}/dist/i/home/home_activity_banner2.jpg`,
            name: "活动1",
            data: "http://www.baidu.com"
        }, {
            url: `${HTTP_SERVER.Domain}/dist/i/home/home_activity_banner2.jpg`,
            name: "活动2",
            data: "http://www.baidu.com"
        }, {url: `${HTTP_SERVER.Domain}/dist/i/home/home_activity_banner2.jpg`, name: "活动3", data: "http://www.google.com"}]
        return (
            <View style={GlobelTheme.appContentView}>
                <MyBannerSwiper dataList={bannerList} {...this.props}/>
                <GameList dataList={gameList} gameModel={gameModel} playModel={playModel}/>
            </View>
        );
    }

    componentDidMount() {
        ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_GAME_LIST_INFO,ActionType.AppType.GAMELIST_RESULT,false);
        ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_PLAY_LIST_INFO,ActionType.AppType.PLAY_LIST_RESULT,false);
        ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_DATA_DEATIL,ActionType.AppType.MOBILE_TYPES_RESULT,false);
        //ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_BANG_CITY_INFO,ActionType.AppType.BANG_CITY_INFO,false);
    }
}
