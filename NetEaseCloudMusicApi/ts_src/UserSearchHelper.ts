import {Request} from "./Request";
import {UserInfo} from "./UserInfo"
export class UserSearchHelper{
    // 固定值
    searchUrl:string = "https://music.163.com/api/search/pc/";
    
    // 设定值
    userName:string;       // 搜索用户名
    limit:number=10;       // 每一页的最大数量，默认10

    // 运行时迭代值
    offset:number=0;      // 当前页码

    constructor(userName:string,limit:number=10){
        this.limit = limit;
        this.userName = userName;
    }

    
    /**
     * 获取搜索结果
     */
    public async getSearchResult(){
        let searchData = `s=${this.userName}&limit=${this.limit}&type=1002&offset=${this.offset}`;
        let postResult = await Request.post(this.searchUrl,searchData);
        let result = UserInfo.buildByPostResult(postResult);
        return result;
    }
}