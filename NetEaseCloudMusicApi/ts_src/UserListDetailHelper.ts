import {Request} from "./Request";
import {Crypto} from "./Crypto";
import { UserListDetail } from "./UserListDetail";

export class UserListDetailHelper{
    // 固定值
    searchUrl:string = "https://music.163.com/weapi/v3/playlist/detail";
    offset:number=0;    // 不分页
    limit:number=1000;  // 不分页显示最多1000条
    n:number = 1000;    // 暂时不知道
    total:boolean =true;// 暂时不知道
    // 设定值
    listId:number;
    
    // 运行时产生值
    listDetail:UserListDetail=new UserListDetail();
    constructor(listId:number){
        this.listId = listId;
    }

    /**
     * 根据歌单id获取歌单内列表
     */
    public async getDeatil(){
        let originData= {
            "id": this.listId,
            "offset": this.offset,
            "total": this.total,
            "limit": this.limit,
            "n": this.n,
            "csrf_token": ""
          }
        let timer = 0;
        let cryptoData;
        let postResult: any;
        do {
            cryptoData = Crypto.encrypt(originData);
            postResult = await Request.post(this.searchUrl, cryptoData);
            timer++;
        } while (postResult.data == "" && timer < 20);
        console.log(postResult);
        this.listDetail.buildByPostResult(postResult);
        return this.listDetail;
    }
}