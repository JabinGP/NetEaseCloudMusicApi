// 音乐功能集合类
import {MusicSearchHelper} from "./MusicSearchHelper"
import {MusicUrlHelper} from "./MusicUrlHelper";

export class MusicManager{

    /**
     * 获取一个用于查询歌曲的对象
     */
    public static getSearchHelper({keyword,limit}):MusicSearchHelper{
      return new MusicSearchHelper(keyword, limit);
    }

    public static getUrlHelper(musicId:number):MusicUrlHelper{
        return new MusicUrlHelper(musicId);
    }

    // /**
    //  * 传入歌名，返回音乐列表
    //  * @param musicName 歌名
    //  */
    // public static async getMusicListByName(musicName:string):Array<MusicInfo>{

    // } 

    // /**
    //  * 传入音乐id，返回歌曲url
    //  * @param musicId 音乐id
    //  */
    // public static async getMusicUrlById(musicId:number):string{

    // }
}

// {
//     "name": "One more time, One more chance",
//     "id": 540968,
//     "position": 1,
//     "alias": [],
//     "status": -1,
//     "fee": 8,
//     "copyrightId": 7003,
//     "disc": "1",
//     "no": 1,
//     "artists": [
//         {
//             "name": "山崎まさよし",
//             "id": 15853,
//             "picId": 0,
//             "img1v1Id": 0,
//             "briefDesc": "",
//             "picUrl": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//             "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//             "albumSize": 0,
//             "alias": [],
//             "trans": "",
//             "musicSize": 0
//         }
//     ],
//     "album": {
//         "name": "One more time, One more chance “秒速5センチメートル”Special Edition",
//         "id": 50669,
//         "type": "EP/Single",
//         "size": 3,
//         "picId": 853221023154280,
//         "blurPicUrl": "https://p2.music.126.net/d58aiv9HsLOenWrvK8jdsQ==/853221023154280.jpg",
//         "companyId": 0,
//         "pic": 853221023154280,
//         "picUrl": "https://p2.music.126.net/d58aiv9HsLOenWrvK8jdsQ==/853221023154280.jpg",
//         "publishTime": 1172851200000,
//         "description": "",
//         "tags": "",
//         "company": "NAYUTAWAVE RECORDS",
//         "briefDesc": "",
//         "artist": {
//             "name": "",
//             "id": 0,
//             "picId": 0,
//             "img1v1Id": 0,
//             "briefDesc": "",
//             "picUrl": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//             "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//             "albumSize": 0,
//             "alias": [],
//             "trans": "",
//             "musicSize": 0
//         },
//         "songs": [],
//         "alias": [
//             "秒速五厘米 电影主题曲"
//         ],
//         "status": 1,
//         "copyrightId": 5003,
//         "commentThreadId": "R_AL_3_50669",
//         "artists": [
//             {
//                 "name": "山崎まさよし",
//                 "id": 15853,
//                 "picId": 0,
//                 "img1v1Id": 0,
//                 "briefDesc": "",
//                 "picUrl": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                 "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
//                 "albumSize": 0,
//                 "alias": [],
//                 "trans": "",
//                 "musicSize": 0
//             }
//         ]
//     },
//     "starred": false,
//     "popularity": 100.0,
//     "score": 100,
//     "starredNum": 0,
//     "duration": 334266,
//     "playedNum": 0,
//     "dayPlays": 0,
//     "hearTime": 0,
//     "ringtone": "",
//     "crbt": null,
//     "audition": null,
//     "copyFrom": "",
//     "commentThreadId": "R_SO_4_540968",
//     "rtUrl": null,
//     "ftype": 0,
//     "rtUrls": [],
//     "copyright": 1,
//     "mvid": 505949,
//     "rtype": 0,
//     "rurl": null,
//     "hMusic": {
//         "name": null,
//         "id": 1185873408,
//         "size": 13373692,
//         "extension": "mp3",
//         "sr": 44100,
//         "dfsId": 3298534891463127,
//         "bitrate": 320000,
//         "playTime": 334266,
//         "volumeDelta": -1.17
//     },
//     "mMusic": {
//         "name": null,
//         "id": 1185873409,
//         "size": 6686868,
//         "extension": "mp3",
//         "sr": 44100,
//         "dfsId": 1365593479847145,
//         "bitrate": 160000,
//         "playTime": 334266,
//         "volumeDelta": -0.73
//     },
//     "lMusic": {
//         "name": null,
//         "id": 1185873410,
//         "size": 4012138,
//         "extension": "mp3",
//         "sr": 44100,
//         "dfsId": 2882919492164176,
//         "bitrate": 96000,
//         "playTime": 334266,
//         "volumeDelta": -0.76
//     },
//     "bMusic": {
//         "name": null,
//         "id": 1185873410,
//         "size": 4012138,
//         "extension": "mp3",
//         "sr": 44100,
//         "dfsId": 2882919492164176,
//         "bitrate": 96000,
//         "playTime": 334266,
//         "volumeDelta": -0.76
//     },
//     "mp3Url": "http://m2.music.126.net/UkJp8vwSmkCG_4d1UgeOAw==/2882919492164176.mp3"
// }