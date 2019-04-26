export class UserInfo{
    userId:number;      // 用户id
    nickname:string;    // 用户名称
    gender:number;      // 0--未设置  1--男  2--女
    avatarUrl:string;   // 用户头像Url
    constructor(userId:number,nickname:string,gender:number,avatarUrl:string){
        this.userId = userId;
        this.nickname = nickname;
        this.gender = gender;
        this.avatarUrl = avatarUrl;
    }
    
    /**
     * 对象解构赋值
     * @param param0 对象 
     */
    public static buildByObject({userId,nickname,gender,avatarUrl}):UserInfo{
        return new UserInfo(userId,nickname,gender,avatarUrl);
    }

    /**
     * 通过网络请求结果构造
     * @param postResult 网络请求结果
     */
    public static buildByPostResult(postResult):Array<UserInfo>{
        let userList = new Array<UserInfo>();
        let users:any = postResult.data.result.userprofiles;
        for(let user of users){
            let userInfo = new UserInfo(user.userId,user.nickname,user.gender,user.avatarUrl);
            userList.push(userInfo);
        }
        return userList;
    }

}