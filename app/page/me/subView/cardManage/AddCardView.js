import React from 'react';
import {
    View,
    Text, StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import {connect} from 'react-redux';
import AIcon from 'react-native-vector-icons/FontAwesome';
import BaseView from "../../../componet/BaseView";
import Button from "react-native-button";

const mapStateToProps = state => {
    return {
        gamesDic: state.appState.gamesDic,
        playsDic: state.appState.playsDic,
    }
}

@connect(mapStateToProps)
export default class AddCardView extends BaseView {
    constructor(props) {
        super(props);
        let dataList = [{name: "招商银行", card: "1111122344332323233"}, {name: "建设银行", card: "1111122344332323233"}]
        this.state = {
            dataList: dataList,
            careNumText:""
        }
    }

    renderBody() {
        return (
            <View
                style={GlobeStyle.appContentView}>
                <Text style={{fontSize: 14, color:GlobelTheme.gray, margin:10}}>请绑定持卡人本人的银行卡</Text>
                <View style={{borderBottomWidth:1, borderColor:GlobelTheme.gray,borderTopWidth:1,height:80, backgroundColor:"white", paddingLeft:10}}>
                    <View style={{flex:1, alignItems:"center", borderBottomWidth: 1, borderBottomColor:GlobelTheme.gray, flexDirection:"row"}}>
                        <Text>持卡人</Text>
                        <Text style={{marginLeft:20}}>thomas</Text>
                    </View>
                    <View style={{flex:1,alignItems:"center",flexDirection:"row"}}>
                        <Text>卡号:</Text>
                        <TextInput
                            style={styles.cardInput}
                            autoCapitalize="none"
                            placeholder={"输入您的银行卡号"}
                            autoFocus={true}
                            onChangeText={(careNumText) => this.setState({careNumText:careNumText})}
                            value={this.state.careNumText}
                            keyboardType={'numeric'}
                        />
                    </View>
                </View>
                <Button
                    containerStyle={{padding:8,margin: 10,  overflow:'hidden', borderRadius:3, backgroundColor: '#d7213c'}}
                    style={{ fontSize: 14,color:"white"}}
                    styleDisabled={{color: '#fff'}}
                    onPress={this.clickNext}>
                     下一步
                </Button>
            </View>
        );
    }

    clickNext=()=>{
        TLog("-----------------------his.state.careNumText-:"+this.state.careNumText.length,this.state.careNumText);
        if(this.state.careNumText.length<1)
        {
            Alert.alert("","请输入有效的卡号",[
                {text: '了解'},
            ])
        }
    }

    componentDidMount() {

    }
}


const styles = StyleSheet.create({
    touchTabButton: {
        flex: 1, alignItems: "center", justifyContent: "center",
    },
   cardInput:{
       width:150,
       marginLeft:20,
       fontSize:14
   }

});
