/**
 * Created by zhangxinhua on 16/12/10.
 */

import React  from 'react';
import CodePush from 'react-native-code-push';

import { Provider } from 'react-redux';
import configureStore from './store/store';
const store = configureStore();

import App from './app';


export default class Root extends React.Component {
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }

    componentDidMount() {
        let keyStr="4m7mIg893Bs5ayH-BPT_w9WhvYdrNJvdXVfbf"; //Staging
        //let keyStr ="B27kAIWYVByQcelgbm6wldM1zBAtNJvdXVfbf"//Production
        // CodePush.checkForUpdate(keyStr).then((update)=>{
        //     if(!update){
        //         CodePush.notifyAppReady();
        //         // console.TLog("已是最新版本--");
        //     }
        //     else{
        //         CodePush.sync({
        //             deploymentKey: keyStr,
        //             updateDialog: {
        //                 optionalIgnoreButtonLabel: '稍后',
        //                 optionalInstallButtonLabel: '后台更新',
        //                 optionalUpdateMessage: '有新版本了，是否更新？',
        //                 title: '更新提示'
        //             },
        //             installMode: CodePush.InstallMode.IMMEDIATE
        //         });
        //     }
        //
        // })


        // CodePush.sync({
        //     deploymentKey: keyStr,
        //     updateDialog: {
        //         optionalIgnoreButtonLabel: '稍后',
        //         optionalInstallButtonLabel: '后台更新',
        //         optionalUpdateMessage: '有新版本了，是否更新？',
        //         title: '更新提示'
        //     },
        //     installMode: CodePush.InstallMode.IMMEDIATE
        // })
    }
}