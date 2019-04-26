//index.js
//获取应用实例
const app = getApp()
const bgAudioManager = wx.getBackgroundAudioManager();
const {MusicManager} = require("../../NetEaseCloudMusicApi/src/MusicManager");

// let a = MusicManager.getUrlHelper(1311347593);
// console.log(a);
async function test(){
    // 搜索歌曲
    let musicSearchHelper = MusicManager.getMusicSearchHelper({ keyword: "one more time one more chance", limit: 10 });
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.nextPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.previousPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    console.log(musicSearchHelper);

    // 获取歌曲url
    let songs = await musicSearchHelper.getSearchResult();
    let musicId  = songs[0].id;
    let musicUrlHelper = MusicManager.getMusicUrlHelper(musicId);
    console.log(`歌曲的ID是：${musicId}`);
    let url = await musicUrlHelper.getUrlResult();
    console.log(`歌曲的url链接是：${url}`);

    let userSearchHelper = MusicManager.getUserSearchHelper({ userName: "JabinGP", limit: 20 });
    let users = await userSearchHelper.getSearchResult();
    console.log(users);

    let userListHelper = MusicManager.getUserListHelper(users[0].userId);
    let iLikeList = await userListHelper.getILikeList()
    console.log(iLikeList);

    let userListDeatilHelper = MusicManager.getUserListDetailHelper(iLikeList.id);
    let listDetail = await userListDeatilHelper.getDeatil();
    console.log(listDetail);
  let timer=0;
    for(let song of listDetail.tracks){
      musicUrlHelper.musicId=song.id;
      console.log(`歌曲的ID是：${musicUrlHelper.musicId}`);
      let url2 = await musicUrlHelper.getUrlResult();
      console.log(`歌曲的url链接是：${url2}`);
      if(timer++>20)break;
    }
  }   
test();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    musciName:"抛物线"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  inputMusicName:function(e){
    console.log(e);
    this.setData({
      musciName: e.detail.value
    })
    console.log(this.data);
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  openMusic:function(){
   
  }
})
