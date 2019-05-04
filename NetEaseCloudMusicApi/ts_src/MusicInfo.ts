export class MusicInfo{
    id:number;          // 歌曲id
    name:string;        // 歌曲名
    picUrl:string;      // 专辑图片
    artistsName:string; // 艺术家名字
    constructor(id:number=0,name:string="unknow",picUrl:string="unknow",artistsName:string="unknow"){
        this.id = id;
        this.name = name;
        this.picUrl = picUrl;
        this.artistsName = artistsName;
    }
    

    public static buildByObject({id,name,picUrl,artistsName}){
        return new MusicInfo(id,name,picUrl,artistsName);
    }
    public static buildByPostResult(postResult):Array<MusicInfo>{
        let songList:Array<MusicInfo> = new Array<MusicInfo>();
        if(postResult.data.result){
            let songs:any = postResult.data.result.songs;
            for(let song of songs){
                let newMusicInfo = new MusicInfo(song.id,song.name,song.album.picUrl,song.artists[0].name);
                songList.push(newMusicInfo);
            }
        }
        return songList;
    }
}