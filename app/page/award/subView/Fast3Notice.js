
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
        // console.log("SD11Choose5----------------SD11Choose5==", passData);
        return (
            <View style={GlobeStyle.appView}>
                <Text>玩法:</Text>
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