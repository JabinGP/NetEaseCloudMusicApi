export class UserList{
    id:number;          // 歌单id
    name:string;        // 歌单名
    coverImgUrl:string; // 歌单图片
    createTime:number;  // 创建时间（时间戳）
    trackCount:number;  // 歌曲数
    playCount:number;   // 歌单播放数
   

    constructor(id:number=0,name:string="unknow",coverImgUrl:string="unknow",createTime:number=-1,trackCount:number=-1,playCount:number=-1){
        this.id = id;
        this.name = name;
        this.coverImgUrl = coverImgUrl;
        this.createTime = createTime;
        this.trackCount = trackCount;
        this.playCount = playCount;
    }
    

    public static buildByObject({id=0,name="unknow",coverImgUrl="unknow",createTime=-1,trackCount=-1,playCount=-1}){
        return new UserList(id,name,coverImgUrl,createTime,trackCount,playCount);
    }

    public static buildByPostResult(postResult):Array<UserList>{
        let UserLists:Array<UserList> = new Array<UserList>();
        let lists:any = postResult.data.playlist;
        for(let list of lists){
            let newUserList = new UserList(list.id,list.name,list.coverImgUrl,list.createTime,list.trackCount,list.playCount);
            UserLists.push(newUserList);
        }
        return UserLists;
    }
}