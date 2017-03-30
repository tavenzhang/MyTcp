import React from 'react';
import {
    View,
    Text, StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import BaseView from "../../componet/BaseView";
import {HeaderPlusRightMenu} from "../../componet/navBarMenu/HeaderMenu";
import MyListView from "../../componet/BaseListView";

const mapStateToProps = state => {
    return {}
}

@connect(mapStateToProps)
export default class CardManageView extends BaseView {
    constructor(props) {
        super(props);
        // let dataList = [{name: "招商银行", card: "1111122344332323233"}, {name: "建设银行", card: "1111122344332323233"}]
        this.state = {
            dataList: []
        }
    }

    getNavigationBarProps() {
        return {rightView: HeaderPlusRightMenu}
    }

    renderBody() {
        // let contentView = this.state.dataList.map((item, index)=> {
        //     return (<TouchableHighlight key={"menuView" + index} onPress={()=>this.itemClick(item)}
        //                                 underlayColor='rgba(10,10,10,0.2)'>
        //         <View style={styles.row}>
        //             <Text style={{color:"white",fontWeight: "bold"}}>{item.name}</Text>
        //             <Text style={{color:"white",marginTop:10}}>{item.card}</Text>
        //         </View>
        //     </TouchableHighlight>)
        // })
        return (
            <MyListView dataList={this.state.dataList} loadMore={this._loadMore} renderRow={this._renderRow}/>
        );
    }


    componentDidMount() {
        HTTP_SERVER.LIST_BANGK_CARDS.body.page = 1;
        HTTP_SERVER.LIST_BANGK_CARDS.body.pagesize = 15;
        ActDispatch.FetchAct.fetchVoWithResult(HTTP_SERVER.LIST_BANGK_CARDS, (result) => {
            if (result.data.data) {
                let arr = this.state.dataList.concat(result.data.data);
                this.setState({dataList: arr});
            }
        })
    }


    _loadMore = (callFinishBack) => {
        HTTP_SERVER.LIST_BANGK_CARDS.body.page += 1;
        HTTP_SERVER.LIST_BANGK_CARDS.body.pagesize = 15;
        ActDispatch.FetchAct.fetchVoWithResult(HTTP_SERVER.LIST_BANGK_CARDS, (result) => {
            if (result.data.data) {
                let arr = this.state.dataList.concat(result.data.data);
                this.setState({dataList: arr});
            }
            if (callFinishBack) {
                callFinishBack();
            }
        })
    }


    _renderRow = (rowData, section) => {
        // let {gameModel,playModel,typesModel}=this.props;
        // let gameName= gameModel.getGameNameById(rowData.lottery_id);
        // let dateStr=   DateUitle.formatSimpleItemDateString(rowData.created_at);
        // let playName = playModel.getWayNameById(rowData.way_id);
        // let money= rowData.is_income ? `+${ parseInt(rowData.amount)}`:`-${ parseInt(rowData.amount)}`
        return (
            <View>
                {/*<TouchableHighlight onPress={() => this.itemClick(rowData)} underlayColor='rgba(10,10,10,0.2)'>*/}
                {/*<View style={styles.row}>*/}
                {/*<View style={[styles.itemContentStyle,{flex:1}]}>*/}
                {/*<Text style={styles.textItemStyle}>{dateStr}</Text>*/}
                {/*</View>*/}

                {/*<View style={[styles.itemContentStyle,{flex:2}]}>*/}
                {/*<Text style={[styles.textItemStyle,{color:rowData.is_income ? "green":"red"}]}>{money}</Text>*/}
                {/*</View>*/}

                {/*<View style={[styles.itemContentStyle,{flex:2}]}>*/}
                {/*<Text style={styles.textItemStyle}>{typesModel.getATransactionType(rowData.type_id)}</Text>*/}
                {/*</View>*/}
                {/*<View style={[styles.itemContentStyle,{flex:2}]}>*/}
                {/*<Text style={styles.textItemStyle}>{gameName}</Text>*/}
                {/*<Text style={{fontSize:12,color:GlobelTheme.gray, marginTop:5}} >{playName}</Text>*/}
                {/*</View>*/}
                {/*<View style={[styles.itemContentStyle,{flex:2}]}>*/}
                {/*<Text style={styles.textItemStyle}>{parseInt(rowData.available)}</Text>*/}
                {/*</View>*/}
                {/*</View>*/}
                {/*</TouchableHighlight>*/}
            </View>
        );
    }


    itemClick = (data) => {
        TLog("data------", data);
    }

    onRightPressed() {
        NavUtil.pushToView(NavViews.AddCardView({title: "添加银行卡"}));
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
        paddingLeft: 30,
        justifyContent: "center"
    },
    scrollView: {
        flex: 1
    }

});
