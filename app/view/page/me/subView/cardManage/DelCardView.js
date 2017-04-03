import React from 'react';
import {
    View,
    Text, StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import {connect} from 'react-redux';
import AIcon from 'react-native-vector-icons/FontAwesome';
import BaseView from "../../../../componet/BaseView";
import Button from "react-native-button";


export default class DelCardView extends BaseView {
    constructor(props) {
        super(props);
        let dataList = [{name: "招商银行", card: "1111122344332323233"}, {name: "建设银行", card: "1111122344332323233"}]
        this.state = {
            careNumText:""
        }
    }

    renderBody() {
        let {passProps}=this.props;
        TLog("DelCardView-----------",passProps)

        return (
            <View
                style={GlobeStyle.appContentView}>
                <Text style={{fontSize: 14, color:GlobelTheme.gray, margin:10}}>卡号: {passProps.accountEny}</Text>
                <View style={{height:200,backgroundColor:"white", paddingLeft:10}}>
                    <View style={{flex:1, alignItems:"center", flexDirection:"row"}}>
                        <View style={{width:GlobelTheme.screenWidth*1/3, alignItems:"flex-end"}}>
                            <Text >开户人姓名: </Text>
                        </View>

                        <TextInput
                            style={styles.cardInput}
                            autoCapitalize="none"
                            placeholder={"输入开户人姓名"}
                            autoFocus={true}
                            onChangeText={(careNumText) => this.setState({careNumText:careNumText})}
                            value={this.state.careNumText}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={{flex:1,alignItems:"center",flexDirection:"row"}}>
                        <View style={{width:GlobelTheme.screenWidth*1/3, alignItems:"flex-end"}}>
                            <Text >银行账号: </Text>
                        </View>
                        <TextInput
                            style={styles.cardInput}
                            autoCapitalize="none"
                            placeholder={"输入您的银行账号"}
                            autoFocus={true}
                            onChangeText={(careNumText) => this.setState({careNumText:careNumText})}
                            value={this.state.careNumText}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={{flex:1,alignItems:"center",flexDirection:"row"}}>
                        <View style={{width:GlobelTheme.screenWidth*1/3, alignItems:"flex-end"}}>
                            <Text>资金密码: </Text>
                        </View>
                        <TextInput
                            style={styles.cardInput}
                            autoCapitalize="none"
                            placeholder={"输入您的资金密码"}
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
                    删除
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
        width:GlobelTheme.screenWidth*2/3,
        marginLeft:20,
        fontSize:14,
        flex:2,
    }

});
