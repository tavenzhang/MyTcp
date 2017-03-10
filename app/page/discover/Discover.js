/**
 * Created by zhangxinhua on 16/12/11.
 */
import React from 'react';
import {
    View,
    Text
    , StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import BaseView from "../componet/BaseView";



const mapStateToProps = state => {
    return {
        isLoading: state.fetchState.requesting,
        infoBox: state.homeState.infoBox
    }
}



@connect(mapStateToProps)
export default class Discover extends BaseView {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderBody() {

        return (
            <View style={GlobeStyle.appContentView}>
                <Text>发现 详情</Text>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}

const styles = StyleSheet.create({
    container: {
        width: GlobelTheme.screenWidth,
        height: GlobelTheme.screenHeight,
        backgroundColor: 'white'
    },
    textStyle: {
        color: GlobelTheme.gray,
    },
    selectedTextStyle: {
        color: GlobelTheme.primary,
    },
    iconPress: {
        color: GlobelTheme.primary,
        fontSize: 25
    },
    iconNormal: {
        color: GlobelTheme.gray,
        fontSize: 25
    }

});