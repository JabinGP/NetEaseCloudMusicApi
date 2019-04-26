import {Request} from "./Request";
import {UserList} from "./UserList";
import {Crypto} from "./Crypto";
export class UserListHelper{
    // 固定值
    searchUrl:string = "https://music.163.com/weapi/user/playlist";
    offset:number=0;    //不分页
    limit:number=1000;  // 不分页显示最多1000条
    // 设定值
    userId:number;
    
    // 运行时产生值
    userList:Array<UserList> = new Array<UserList>();
    constructor(userId:number){
        this.userId = userId;
    }

    /**
     * 获取用户所有歌单
     */
    public async getAllLists(){
        let originData = {
            "offset": this.offset,
            "uid": this.userId,
            "limit": this.limit,
            "csrf_token": ""
        }
        let timer =0;
        let cryptoData;
        let urlData;
        let postResult: any;
        do{
            cryptoData = Crypto.encrypt(originData);
            urlData = `params=${cryptoData.params}&encSecKey=${cryptoData.encSecKey}`;
            postResult = await Request.post(this.searchUrl, urlData);
            timer++;
          }while (postResult.data == "" && timer<20);
        this.userList = UserList.buildByPostResult(postResult);
        return this.userList;
    }

    /**
     * 获取用户我喜欢歌单
     */
    public async getILikeList(){
        let originData = {
            "offset": this.offset,
            "uid": this.userId,
            "limit": this.limit,
            "csrf_token": ""
        }
        let timer =0;
        let cryptoData;
        let postResult: any;
        do{
            cryptoData = Crypto.encrypt(originData);
            postResult = await Request.post(this.searchUrl, cryptoData);
            timer++;
          }while (postResult.data == "" && timer<20);
        this.userList = UserList.buildByPostResult(postResult);
        return this.userList[0];
    }
}