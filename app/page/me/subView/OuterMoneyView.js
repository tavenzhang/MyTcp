import React from 'react';
import {
    View,
    Text
    , StyleSheet,
    TextInput,
    Picker
} from 'react-native';
import {connect} from 'react-redux';
import Button from 'react-native-button'
import AIcon from 'react-native-vector-icons/FontAwesome';
import BaseView from "../../componet/BaseView";

const mapStateToProps = state => {
    return {
        isLoading: state.fetchState.requesting || state.appState.requesting,
    }
}

@connect(mapStateToProps)
export default class OuterMoneyView extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            nameText: "",
            pwdText: "",
            language:""
        };
    }

    renderBody() {
        return (
            <View style={GlobeStyle.appContentView}>
                <View style={{flex: 2, marginLeft: 30, marginRight: 30}}>
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.trLeft}>
                            <Text style={styles.cellMargin}>用户名:</Text>
                        </View>
                        <View style={styles.trRight}>
                            <Text style={styles.cellMargin}>taven</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.trLeft}>
                            <Text style={styles.cellMargin}>可提现金额:</Text>
                        </View>
                        <View style={styles.trRight}>
                            <Text style={styles.cellMargin}>2222222</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", alignItems:"center"}}>
                        <View style={styles.trLeft}>
                            <Text style={styles.cellMargin}>收款银行卡信息:</Text>
                        </View>
                        <View style={styles.trRight}>
                            <Picker
                                mode={'dropdown'}
                                selectedValue={this.state.language}
                                onValueChange={(lang) => this.setState({language: lang})}>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                                <Picker.Item label="swift" value="swift" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.trLeft}>
                            <Text style={styles.cellMargin}>提现金额:</Text>
                        </View>
                        <View style={[styles.trRight,{alignItems:"center", flexDirection:"row"}]}>
                            <AIcon name="lock" style={styles.icoPwd}/>
                            <TextInput
                                style={styles.textStyle}
                                onChangeText={(pwdText) => this.setState({pwdText})}
                                value={this.state.newPwd}
                                maxLength={8}
                                placeholder={"提现金额100起步"}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <Button
                        containerStyle={{
                            padding: 10,
                            margin: 10,
                            overflow: 'hidden',
                            borderRadius: 3,
                            backgroundColor: '#d7213c'
                        }}
                        style={{fontSize: 14, color: "white"}}
                        styleDisabled={{color: '#fff'}}
                        onPress={this.clickReg}>
                        下一步
                    </Button>
                </View>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
}


const styles = StyleSheet.create({
    trLeft: {
        alignItems: "flex-end",
        flex: 2,
    },
    trRight: {
        flex: 3
    },
    cellMargin:{
        margin:10
    },
    textStyle: {
        width: 150,
        left: 10,
        fontSize: 14
    },
    icoPwd: {
        color: GlobelTheme.gray,
        fontSize: 20,
    },
    inputContain: {
        paddingBottom: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 5,
        flexDirection: "row",
        height: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'gray',
        borderBottomWidth: 0.2
    }
});
