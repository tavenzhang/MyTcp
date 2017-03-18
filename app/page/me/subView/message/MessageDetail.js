/**
 * Created by thomas on 2017/3/10.
 */
import React from 'react';
import {
    View,
    Text,
    WebView
} from 'react-native';
import BaseView from "../../../componet/BaseView";

export  default class MessageDetail extends BaseView {


    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    renderBody() {
        let {gamesDic} = this.props.passProps
        let typeInfo=this.state.data.msg_type;
        let typeName="";
        for(let key in typeInfo)
        {
            if(`${this.state.data.type_id}`==key)
            {
                typeName = typeInfo[key];
            }
        }
       // {this.state.data.msg_type[this.state.data.type_id]}
        return (<View style={[GlobeStyle.appContentView]}>
            <View>
                <Text>标题:   {this.state.data.msg_title}</Text>
            </View>
            <View>
                <Text>收件时间:   {this.state.data.updated_at}</Text>
            </View>
            <View>
                <Text>邮件类型: 【{typeName}】 </Text>
            </View>
           <WebView source={{html:this.state.data.content}}  automaticallyAdjustContentInsets={false} />
        </View>);
    }

    componentDidMount() {
        let {id} = this.props.passProps
        let tempUrl=HTTP_SERVER.LETTER_DETAIL.url;
        HTTP_SERVER.LETTER_DETAIL.url = HTTP_SERVER.LETTER_DETAIL.url.replace(/#id/g, id);
        ActDispatch.FetchAct.fetchVoWithResult(HTTP_SERVER.LETTER_DETAIL, (result) => {
            if (result.data) {
                this.setState({data: result.data})
            }
        })
        HTTP_SERVER.LETTER_DETAIL.url=tempUrl;
    }
}