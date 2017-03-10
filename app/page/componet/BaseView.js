import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    LayoutAnimation
} from 'react-native';
import NavigationBar from './NavigationBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default class BaseView extends Component {
    constructor(props) {
        super(props);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        this.renderNavigationBar = this.renderNavigationBar.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.onLeftPressed = this.onLeftPressed.bind(this);
        this.onRightPressed = this.onRightPressed.bind(this);
    }
    /**
     * 子类可重写
     * @returns {null}
     */
    getNavigationBarProps () {
        return {};
    }

    renderNavigationBar() {
        let navigationBarProps = this.getNavigationBarProps();
        if(navigationBarProps != null)
        {
            Object.assign(navigationBarProps,this.props.passProps);
            return (
                <NavigationBar
                    {...navigationBarProps}
                    onLeftPressed={this.onLeftPressed}
                    onRightPressed={this.onRightPressed}
                />
            );
        }
        else{
            return {}
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.renderNavigationBar()}
                {this.renderBody()}
            </View>
        );
    }

    componentWillUpdate() {
        LayoutAnimation.configureNext(LayoutAnimationHelp.springNoDelete);
    }


    renderBody() {

    }

    onLeftPressed() {
         NavUtil.pop();
    }

    onRightPressed() {
        TLog('onRightPressed');
    }
}