import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import AIcon from 'react-native-vector-icons/FontAwesome';
import Home from "./home/Home";
import MyView from "./me/MyView";
import Notice from "./award/GameResultView";
import Discover from "./notice/Notice";

const tabBarItems = [
    {title: '购彩', icon: 'home', selectIcon: "home", component: Home},
    {title: '开奖', icon: 'gift', selectIcon: "gift", component: Notice},
    {title: '公告', icon: 'reorder', selectIcon: "reorder", component: Discover},
    {title: '我的', icon: 'user', selectIcon: 'user', component: MyView},
]

export default class TabbarView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title
        };
    }

    render() {
        return (
            <View style={GlobeStyle.appView}>
                <TabNavigator tabBarStyle={{backgroundColor: "#171719"}}>
                    {
                        tabBarItems.map((item, i) => {
                            let Component = item.component;
                            return (
                                <TabNavigator.Item
                                    key={i}
                                    title={item.title}
                                    selected={this.state.selectedTab === item.title}
                                    selectedTitleStyle={styles.selectedTextStyle}
                                    titleStyle={styles.textStyle}
                                    renderIcon={() => <AIcon name={item.icon} style={styles.iconNormal}/>}
                                    renderSelectedIcon={() => <AIcon name={item.icon} style={styles.iconPress}/>}
                                    onPress={() => this.setState({selectedTab: item.title})}>
                                    <Component {...this.props}  passProps={{title:item.title}}/>
                                </TabNavigator.Item>
                            )
                        })
                    }
                </TabNavigator>
            </View>);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        // this.timer && clearTimeout(this.timer);
    }
}


const styles = StyleSheet.create({
    textStyle: {
        color: GlobelTheme.gray,
    },
    selectedTextStyle: {
        color: GlobelTheme.selectColor,
    },
    iconPress: {
        color: GlobelTheme.selectColor,
        fontSize: 25
    },
    iconNormal: {
        color: GlobelTheme.gray,
        fontSize: 25
    },
    tabItem: {
        backgroundColor: '#f00'
    }
});