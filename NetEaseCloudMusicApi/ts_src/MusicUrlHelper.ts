import {Request} from "./Request";
import {Crypto} from "./Crypto";
export class MusicUrlHelper{
    // 固定值
    searchUrl:string = "https://music.163.com/weapi/song/enhance/player/url/";
    
    // 设定值
    musicId:number;

    // 结果
    result:string="";

    constructor(musicId:number){
        this.musicId = musicId;
    }

    /**
     * 获取搜索结果
     */
    public async getUrlResult(){
        let originData = {
            "ids": [this.musicId],
            "br": 999000,
            "csrf_token": ""
        }
        let timer =0;
        let cryptoData;
        let result: any;
        do{
          cryptoData = Crypto.encrypt(originData);
          result = await Request.post(this.searchUrl, cryptoData);
          timer++;
        }while (result.data == "" && timer<20);
        if (result.data==""){
          return "";
        }else{
        
          this.result = result.data.data[0].url;
          return this.result;
        }
    }

}