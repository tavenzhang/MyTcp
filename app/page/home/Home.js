import React from 'react';
import {
    View,
} from 'react-native';
import BaseView from "../componet/BaseView";
import {connect} from 'react-redux';
import GameList from "./subview/GameList";
import MyBannerSwiper from "../componet/MyBannerSwiper";

const mapStateToProps = state => {
    return {
        bannerList: state.homeState.bannerList,
        gamesDic: state.appState.gamesDic
    }
}

@connect(mapStateToProps)
export default class Home extends BaseView {

    constructor(props) {
        super(props);
    }

    renderBody() {
        let {gamesDic, bannerList} = this.props;
        let gameList=gamesDic.arrayList;
        bannerList = [{
            url: 'http://p.lgfxiu.com/43cadf050bb5ec86043a99343b2608ee',
            name: "活动1",
            data: "http://www.baidu.com"
        }, {
            url: 'http://p.lgfxiu.com/43cadf050bb5ec86043a99343b2608ee',
            name: "活动2",
            data: "http://www.baidu.com"
        }, {url: 'http://p.lgfxiu.com/43cadf050bb5ec86043a99343b2608ee', name: "活动3", data: "http://www.google.com"}]
        return (
            <View style={GlobelTheme.appContentView}>
                <MyBannerSwiper dataList={bannerList}/>
                <GameList dataList={gameList}/>
            </View>
        );
    }

    componentDidMount() {
        ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_GAME_LIST_INFO,ActionType.AppType.GAMELIST_RESULT,false);
        ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.GET_PLAY_LIST_INFO,ActionType.AppType.PLAY_LIST_RESULT,false);
    }
}
