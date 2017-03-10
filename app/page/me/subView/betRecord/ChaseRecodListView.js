import React from 'react';
import {
    View,
    Text, StyleSheet,
    TouchableHighlight,
} from 'react-native';

import BetListView from "../../../componet/BaseListView";
import AIcon from 'react-native-vector-icons/FontAwesome';

export default class ChaseRecodListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ds = this.props.dataList;
        return (
            <View style={GlobeStyle.appContentView}>
                <BetListView dataList={ds} loadMore={this.props.loadMore} renderRow={this._renderRow}/>
            </View>
        )
    }

    _renderRow = (rowData) => {
        let {gamesDic}  = this.props;
        let   gameName = ""
        if(gamesDic[`${rowData.lottery_id}`])
        {
            gameName=gamesDic[`${rowData.lottery_id}`].name
        }
        return (
            <View>
                <TouchableHighlight onPress={() => this.itemClick(rowData)} underlayColor='rgba(10,10,10,0.2)'>
                    <View style={styles.row}>
                        <View style={[styles.itemContentStyle,{flex:2}]}>
                            <Text style={styles.textItemStyle}>{gameName}</Text>
                        </View>
                        <View style={[styles.itemContentStyle,{flex:2}]}>
                            <Text style={styles.textItemStyle}>{rowData.title}</Text>
                            <Text style={{fontSize: 12,color:"gray", marginTop:5}} numberOfLines={1}>{`投注号码:${rowData.bet_number}`}</Text>

                        </View>
                        <View style={styles.itemContentStyle}>
                            <Text style={styles.textItemStyle} >{rowData.status}</Text>
                        </View>
                        <View style={styles.itemContentStyle}>
                            <AIcon name={"angle-right"}
                                   style={{fontSize: 25, alignSelf:"center",color:"gray"}}/>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    itemClick = (data) => {
        let {gamesDic}  = this.props;
        NavUtil.pushToView(NavViews.ChaseDeatilView({...data,title:"追号详情",gamesDic:gamesDic}));
    }
}

const styles = StyleSheet.create({
    itemHeadStyle: {
        alignItems: "center",
        borderRightWidth: 1,
        justifyContent: "center"
        // borderWidth: 1
    },
    itemContentStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
        // borderWidth: 1
    },
    textHeadStyle: {
        fontSize: 14,
        fontWeight: "bold",
        color:"gray"
    },
    textItemStyle: {
        fontSize: 13,
    },
    headRow: {
        flexDirection: 'row',
        height: 20,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
    },
    row: {
        flexDirection: 'row',
        height: 50,
        borderBottomWidth:0.5,
        marginLeft:10,
        borderColor: "gray",
        // borderWidth: 1,
    },


});
