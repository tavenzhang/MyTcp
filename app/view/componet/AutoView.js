import React from 'react';
import {
    View,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';


export default class AutoView extends React.Component {

    render() {
        return (
            <TouchableWithoutFeedback style={{flex:1}} onPress={Keyboard.dismiss}>
                {this.props.children}
            </TouchableWithoutFeedback>
        )
    }
}


