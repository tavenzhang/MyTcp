import React from 'react';
import {
    View,
    ListView,
    RefreshControl,
    ActivityIndicator,
    LayoutAnimation
} from 'react-native';

let canLoadMore = false;
export default class BaseListView extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isRefreshing: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        }
        this.finishLoadData.bind(this);
    }

    render() {
        let ds = this.state.dataSource.cloneWithRows(this.props.dataList);
        return (
            <View style={GlobeStyle.appContentView}>
                <ListView
                    dataSource={ds}
                    renderRow={this.props.renderRow}
                   // onEndReached={this.props.loadMore}
                   // onEndReachedThreshold={50}
                  //  renderFooter={this._renderFooter}
                    onScroll={this._onScroll}
                    enableEmptySections={true}
                    pageSize={15}
                    initialListSize={10}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                />
            </View>
        );
    }

    // _renderRow = (rowData) => {
    //
    // }
    // componentWillUpdate() {
    //     LayoutAnimation.configureNext(LayoutAnimationHelp.defaultSpring);
    // }

    componentDidMount() {

    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        if(this.props.loadMore!=null)
        {
            this.props.loadMore(this.finishLoadData);
        }
        else{
            this.finishLoadData();
        }

    }

    _onScroll = () => {
        if (!canLoadMore) canLoadMore = true;
    }

    _renderFooter = () => {
        if (!canLoadMore) {
            return null;
        }
        // return (
        //     <View style={{height: 50}}>
        //         <ActivityIndicator />
        //     </View>
        // );
    }

    finishLoadData=()=>{
        canLoadMore = false;
        this.setState({isRefreshing: false});
    }

}


