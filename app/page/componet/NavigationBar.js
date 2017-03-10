/**
 * Created by ljunb on 16/5/8.
 * 导航栏标题
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
export const Header_Arrow = "angle-left";

const top_title = Platform.OS === 'ios' ? 10 : 0

export default class NavigationBar extends React.Component {

    render() {
        let headBar = [];


        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;
            headBar.push(
                <View style={styles.titleContain} key="titleView">
                    <Component key={'titleView'} data={this.props}/>
                </View>
            )
        }
        else{
            // 标题
            headBar.push(
                    <View style={styles.titleContain} key="title">
                        <Text key={'title'} style={styles.title}>{this.props.title}</Text>
                    </View>
                )
        }


        if (this.props.leftView != undefined) {
            let Component = this.props.leftView;
            headBar.push(
                <TouchableOpacity
                    key={'leftIconView'}
                    activeOpacity={0.75}
                    style={styles.leftMenu}
                    onPress={this.props.onLeftPressed}
                >
                    <Component key={'leftMenuView'} data={this.props}/>
                </TouchableOpacity>
            )
        }


        if (this.props.isShowBack || (Navgator && Navgator.getCurrentRoutes().length > 1)) {
            headBar.push(
                <TouchableOpacity
                    key={'leftMenu'}
                    activeOpacity={0.75}
                    style={styles.leftMenu}
                    onPress={this.props.onLeftPressed}
                >
                    <Icon color="white" size={30} name={Header_Arrow}/>
                    <Text key={'leftIcotitle'} style={styles.leftMenuName}>返回</Text>
                </TouchableOpacity>
            )
        }

        if (this.props.rightView != undefined) {
            let Component = this.props.rightView;
            headBar.push(
                <TouchableOpacity
                    key={'rightMenu'}
                    activeOpacity={0.75}
                    style={styles.rightMenu}
                    onPress={this.props.onRightPressed}
                >
                    <Component key={'rightView'} data={this.props}/>
                </TouchableOpacity>
            )
        }


        return (
            <View style={styles.navigationBarContainer}>
                    {headBar}
            </View>

        )
    }
}


const styles = StyleSheet.create({
    navigationBarContainer: {
        flexDirection: 'row',
        height: GlobelTheme.NavigatorHeadH,
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: '#d7213c',
    },
    titleContain: {
        position: 'absolute',
        width: GlobelTheme.screenWidth,
        height: GlobelTheme.NavigatorHeadH,
        paddingTop: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "900",
        paddingTop: top_title,
        textAlign: 'center',
    },
    leftMenuName: {
        fontSize: 15,
        color: "#fff",
        fontWeight: 'bold',
        left: 5,
        top: 2
    },
    leftMenu: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    rightMenu: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
})