// 音乐功能集合类
import {MusicSearchHelper} from "./MusicSearchHelper"
import {MusicUrlHelper} from "./MusicUrlHelper";
import {UserSearchHelper} from "./UserSearchHelper";
import {UserListHelper} from "./UserListHelper";
import {UserListDetailHelper} from "./UserListDetailHelper"
export class MusicManager{

    /**
     * 获取一个用于查询歌曲的对象
     */
    public static getMusicSearchHelper({keyword,limit}):MusicSearchHelper{
      return new MusicSearchHelper(keyword, limit);
    }

    /**
     * 获取一个用于查询id对应播放url的对象
     * @param musicId 音乐id
     */
    public static getMusicUrlHelper(musicId:number):MusicUrlHelper{
        return new MusicUrlHelper(musicId);
    }
    
    /**
     * 获取一个用于查询用户的对象
     */
    public static getUserSearchHelper({userName,limit}):UserSearchHelper{
      return new UserSearchHelper(userName,limit);
    }
    
    /**
     * 获取一个读取用户列表的对象
     * @param userId 用户id
     */
    public static getUserListHelper(userId:number):UserListHelper{
      return new UserListHelper(userId);
    }

    public static getUserListDetailHelper(listId:number):UserListDetailHelper{
      return new UserListDetailHelper(listId);
    }


    
}