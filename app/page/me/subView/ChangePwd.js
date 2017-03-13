import React from 'react';
import {
    View,
    Text
    , StyleSheet,
    TextInput,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Button from 'react-native-button'
import AIcon from 'react-native-vector-icons/FontAwesome';
import BaseView from "../../componet/BaseView";

export default class ChangePwd extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            oldPwd: "",
            newPwd: "",
            repeatPwd:"",
            selectedTabIndex: 0,
        };
    }

    renderBody() {
        const {title} = this.props;
        return (
            <View style={GlobeStyle.appView}>
                <SegmentedControlTab
                    values={['登陆密码', '资金密码']}
                    onTabPress={this.onTabChange}
                    tabsContainerStyle={{marginLeft:40,marginRight: 40,alignSelf: "center",margin: 5}}
                    tabStyle={{borderColor:"#a52a2a"}}
                    selectedIndex={this.state.selectedTabIndex}
                    activeTabStyle={{backgroundColor: "#a52a2a"}}
                />
                <View style={{marginLeft:40,marginRight: 40,top:GlobelTheme.screenHeight/9}}>
                    <View style={styles.inputContain}>
                        <AIcon name="lock" style={styles.icoPwd}/>
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={(pwd) => this.setState({oldPwd:pwd})}
                            value={this.state.oldPwd}
                            placeholder={ this.state.selectedTabIndex ? "原资金密码":"原登陆密码"}
                            autoFocus={true}
                        />
                    </View>
                    <View style={styles.inputContain}>
                        <AIcon name="lock" style={styles.icoPwd}/>
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={(pwd) => this.setState({newPwd:pwd})}
                            value={this.state.newPwd}
                            maxLength={9}
                            placeholder={this.state.selectedTabIndex ? "新资金密码":"新登陆密码"}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputContain}>
                        <AIcon name="lock" style={styles.icoPwd}/>
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={(pwd) => this.setState({repeatPwd:pwd})}
                            value={this.state.repeatPwd}
                            maxLength={9}
                            placeholder={"确认密码"}
                            secureTextEntry={true}
                        />
                    </View>
                    <Button
                        containerStyle={{padding:5,margin: 10,  overflow:'hidden', borderRadius:3, backgroundColor: '#d7213c'}}
                        style={{ fontSize: 14,color:"white"}}
                        styleDisabled={{color: '#fff'}}
                        onPress={this.onCommitAction}>
                        {this.state.selectedTabIndex ? "资金密码":"登陆密码"}
                        提交
                    </Button>
                </View>
            </View>
        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onTabChange = (index) => {
        this.setState({
            selectedTabIndex: index,
            oldPwd: "",
            newPwd: "",
            repeatPwd:"",
        })
    }

    onCommitAction = () => {
        if(this.state.oldPwd=="")
        {
            AppAct.showErrorBox("原密码不能为空.")
        }
        else if(this.state.newPwd=="")
        {
            AppAct.showErrorBox("新密码不能为空.")
        }
        else if (this.state.repeatPwd=="")
        {
            AppAct.showErrorBox("确认密码不能为空.")
        }
        else if(this.state.newPwd!=this.state.repeatPwd)
        {
            AppAct.showErrorBox("确认密码与新密码不一致.")
        }else {
            var data = HTTP_SERVER.CHANGE_PWD.body;
            data.oldpwd= this.state.oldPwd;
            data.newpwd= this.state.newpwd;
            data.pwdtype= this.state.selectedTabIndex == 0 ? 0:1;
            data.jsessionid="";
            FetchAct.fetchVoWithResult(HTTP_SERVER.CHANGE_PWD, (data) => {
                if (data.isSuccess) {
                    NavUtil.pop(this.props);
                    AppAct.loginReault(data);
                } else {
                    AppAct.showBox(data.Msg);
                }
            },false)
        }
    }

}


const styles = StyleSheet.create({
    textStyle: {
        width: 150,
        left: 10,
        fontSize: 14
    },
    iconUser: {
        color: GlobelTheme.gray,
        fontSize: 18,
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
