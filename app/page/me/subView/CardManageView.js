import React from 'react';
import {
    View,
    Text, StyleSheet,
    TouchableHighlight,
    LayoutAnimation,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import BaseView from "../../componet/BaseView";
import {HeaderPlusRightMenu} from "../../componet/navBarMenu/HeaderMenu";



const mapStateToProps = state => {
    return {
        gamesDic: state.appState.gamesDic,
        playsDic: state.appState.playsDic,
    }
}

@connect(mapStateToProps)
export default class CardManageView extends BaseView {
    constructor(props) {
        super(props);
        let dataList = [{name: "招商银行", card: "1111122344332323233"}, {name: "建设银行", card: "1111122344332323233"}]
        this.state = {
            dataList: dataList
        }
    }

     getNavigationBarProps()
     {
        return {rightView:HeaderPlusRightMenu}
     }



    renderBody() {
        let contentView = this.state.dataList.map((item, index)=> {
            return (<TouchableHighlight key={"menuView" + index} onPress={()=>this.itemClick(item)}
                                        underlayColor='rgba(10,10,10,0.2)'>
                <View style={styles.row}>
                    <Text style={{color:"white",fontWeight: "bold"}}>{item.name}</Text>
                    <Text style={{color:"white",marginTop:10}}>{item.card}</Text>
                </View>
            </TouchableHighlight>)
        })
        return (
                <ScrollView
                    style={GlobeStyle.appContentView}>
                    {contentView}
                </ScrollView>
        );
    }

    componentDidMount() {

    }


    itemClick = (data)=> {
        TLog("data------", data);
    }

    onRightPressed() {
       NavUtil.pushToView(NavViews.AddCardView({title:"添加银行卡"}));
    }
}


const styles = StyleSheet.create({
    touchTabButton: {
        flex: 1, alignItems: "center", justifyContent: "center",
    },
    row: {
        height: 100,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 8,
        margin: 5,
        paddingLeft:30,
        justifyContent:"center"
    },
    scrollView: {
        flex: 1
    }

});
