
import React from 'react';
import {
    View,
    Text
    , StyleSheet,
    TextInput
} from 'react-native';

import {connect} from 'react-redux';
import BaseView from "../../componet/BaseView";

const mapStateToProps = state => {
    return {
        isLoading: state.fetchState.requesting || state.appState.requesting,
    }
}
@connect(mapStateToProps)
export default class MyMoneyView extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            nameText: "",
            pwdText:""
        };
    }

    renderBody() {
        return (
            <View style={GlobeStyle.appView}>
                <View style={{flex:1}}>
                    <Text>用户名：</Text>
                    <Text>用户总额：</Text>
                    <Text>可提金额：</Text>
                </View>
            </View>
        );
    }

    componentDidMount() {

    }
}


const styles = StyleSheet.create({
    textStyle: {
        width: 150,
        left: 10,
        fontSize: 14
    },
    iconUser: {
        color: GlobelTheme.gray,
        fontSize: 18,
    },
    icoPwd: {
        color: GlobelTheme.gray,
        fontSize: 20,
    },
    inputContain: {
        paddingBottom: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 5,
        flexDirection: "row",
        height: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'gray',
        borderBottomWidth: 0.2
    }


});
