import React from 'react';
import {
    View,
    Text, StyleSheet,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity
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
        let subCard = rowData.account.substr(0, rowData.account.length - 4);
        subCard = subCard.replace(/./g, "*");
        subCard += rowData.account.substr(rowData.account.length - 4);
        rowData.accountEny=subCard;
        let countName = rowData.account_name.replace(/./g, "*");
        let lockSate = rowData.islock ? "被锁定" : "使用中"

        return (
            <View style={styles.row}>
                <View style={{flex: 2}}>
                    <Text style={{color: "white"}}>{rowData.bank}</Text>
                    <Text style={{color: "white", fontSize: 12, marginTop: 3, letterSpacing: 2}}>卡号:{subCard}</Text>
                    <Text style={{color: "white", fontSize: 12, marginTop: 3, letterSpacing: 2}}>账户:{countName}</Text>
                    <Text style={{color: "white", fontSize: 12, marginTop: 3,}}>银行卡状态:{lockSate}</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                    <TouchableOpacity onPress={()=>{this.itemEditClcik(rowData)}}>
                        <Text style={{color: "yellow",}}>编辑</Text>
                    </TouchableOpacity>
                    <Text style={{color: "white", marginHorizontal:3}}>|</Text>
                    <TouchableOpacity onPress={()=>{this.itemDeleteClcik(rowData)}}>
                        <Text style={{color: "red"}}>删除</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }


    itemEditClcik=(data)=>
    {
        NavUtil.pushToView(NavViews.EditCardView({title: "编辑银行卡",...data}));
    }

    itemDeleteClcik=(data)=>
    {
        NavUtil.pushToView(NavViews.DelCardView({title: "删除银行卡",...data}));
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
        flexDirection: "row",
        height: 100,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 5,
        marginVertical: 3,
        paddingLeft: 30,
        alignItems: "center"
    },
    scrollView: {
        flex: 1
    }

});
