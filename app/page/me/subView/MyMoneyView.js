import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import BaseView from "../../componet/BaseView";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabStyle:{
        //zIndex:0,
        //backgroundColor:"white",
        height:40,
    },
    labelStyle:{
        color:"black",
    },
    indicatorStyle:{
       backgroundColor:"red",
    },
    tstyle:{
        backgroundColor:"white",

    }
});

export default class MyMoneyView extends BaseView {
    state = {
        index: 0,
        routes: [
            { key: '1', title: '全部' },
            { key: '2', title: '充值' },
            { key: '3', title: '支付' },
            { key: '4', title: '派奖' },
            { key: '5', title: '提现' },
        ],
    };
    _handleChangeTab = (index) => {
        this.setState({ index });
    };

    _renderHeader = (props) => {
        return <TabBar style={styles.tstyle} {...props} tabStyle={styles.tabStyle} labelStyle={styles.labelStyle} indicatorStyle={styles.indicatorStyle} pressColor={"#ff4081"} pressOpacity={5} />;
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <View style={[ styles.page, { backgroundColor: '#ff4081' } ]} />;
            case '2':
                return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
            default:
                return <View style={[ styles.page, { backgroundColor: '#ff0' } ]} />;
        }
    };

    renderBody() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}