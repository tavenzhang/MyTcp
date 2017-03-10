/**
 * Created by zhangxinhua on 16/12/10.
 */
import React  from 'react';
import {
    Image,
    Animated,
    Easing,
} from 'react-native';

import {startImg} from './../assets';

export default class GuidView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fadeInOpacity:new Animated.Value(0),
        }
    }

    render() {
        return (
            <Animated.View style={{flex: 1,opacity:this.state.fadeInOpacity}}>
                <Image
                    style={{flex: 1, width: GlobelTheme.screenWidth.width, height:GlobelTheme.screenHeight.height}}
                    source={startImg}
                />
            </Animated.View>
        );
    }

    componentDidMount() {
        Animated.timing(this.state.fadeInOpacity,{
            toValue:1,
            duration:1500,
            easing:Easing.linear()
        }).start(this.toApp());
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    toApp=()=>{
        this.timer = setTimeout(() => {
            NavUtil.resetToView(NavViews.TabbarView());
        }, 3000)

    }
}
