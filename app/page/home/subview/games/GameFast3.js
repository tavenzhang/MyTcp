/**
 * Created by zhangxinhua on 16/12/20.
 */
/**
 * Created by zhangxinhua on 16/12/11.
 */
import React from 'react';
import {
    Image,
    View,
    Text
    , StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import BaseView from "../../../componet/BaseView";

const mapStateToProps = state => {
    return {}
}

@connect(mapStateToProps)
export default class GameFast3 extends BaseView {

    getNavigationBarProps() {
        return {title: this.props.name, isShowBack: true}
    }

    renderBody() {
        return (
            <View style={GlobeStyle.appContentView}>
                <Text>111</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({});