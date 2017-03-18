/**
 * Created by thomas on 2017/3/15.
 */
export  default class PlayModel{

    constructor(data){
        if(data)
        {
            this.data= data;
            //玩法数据预处理
            for(let key in data){
                if(data[key]["children"])
                {
                    data[key].arrayList=[]
                    for(let subKey in data[key]["children"]) {
                        data[key].arrayList.push(data[key]["children"][subKey]);
                    }
                }
            }
        }
    }

    getPlayByGid(gid)
    {
        let id=`series_id_${gid}`;
        return this.data[`${id}`];
    }

}