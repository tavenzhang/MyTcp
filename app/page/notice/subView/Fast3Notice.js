
import React from 'react';
import {
    View,
    Text
    , StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import BaseView from "../../componet/BaseView";
const mapStateToProps = state => {
    return {
    }
}


@connect(mapStateToProps)
export default class Fast3Notice extends BaseView {


    renderBody() {
        // const {passData} = this.props;
        // console.log("Fast3Notice----------------Fast3Notice==", passData);
        return (
            <View style={GlobeStyle.appView}>
                <Text>111</Text>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}

const styles = StyleSheet.create({

});