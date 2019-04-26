import { MusicInfo } from "./MusicInfo";

export class UserListDetail{
    id:number;          // 歌单id
    name:string;        // 歌单名
    coverImgUrl:string; // 歌单图片
    createTime:number;  // 创建时间（时间戳）
    trackCount:number;  // 歌曲数
    playCount:number;   // 歌单播放数

    tracks:Array<MusicInfo> = new Array<MusicInfo>();   //歌单详细

    constructor(id:number=0,name:string="unknow",coverImgUrl:string="unknow",createTime:number=-1,trackCount:number=-1,playCount:number=-1){
        this.id = id;
        this.name = name;
        this.coverImgUrl = coverImgUrl;
        this.createTime = createTime;
        this.trackCount = trackCount;
        this.playCount = playCount;
    }

    public buildByObject({id,name,coverImgUrl,createTime,trackCount,playCount}){
        return new UserListDetail(id,name,coverImgUrl,createTime,trackCount,playCount);
    }

    public buildByPostResult(postResult){
        let playlist:any = postResult.data.playlist;
        this.id = playlist.id;
        this.name = playlist.name;
        this.coverImgUrl = playlist.coverImgUrl;
        this.createTime = playlist.createTime;
        this.trackCount = playlist.trackCount;
        this.playCount = playlist.playCount;
        let songs:any = playlist.tracks;
        for(let song of songs){
            let newMusicInfo = new MusicInfo(song.id,song.al.name,song.al.picUrl,song.ar[0].name);
            this.tracks.push(newMusicInfo);
        }
        return this.tracks;
    }

}