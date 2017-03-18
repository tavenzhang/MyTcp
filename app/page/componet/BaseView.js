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
        this.onHeadPressed=this.onHeadPressed.bind(this)
    }

    getNavigationBarProps () {
        return {
        };
    }

    renderNavigationBar() {
        let navigationBarProps = this.getNavigationBarProps();
        if(navigationBarProps != null)
        {
            Object.assign(this.props.passProps,navigationBarProps);
            return (
                <NavigationBar
                    {...this.props.passProps}
                    onLeftPressed={this.onLeftPressed}
                    onRightPressed={this.onRightPressed}
                    onHeadPressed={this.onHeadPressed}
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

    onHeadPressed() {
        TLog('onHeadPressed');
    }


}