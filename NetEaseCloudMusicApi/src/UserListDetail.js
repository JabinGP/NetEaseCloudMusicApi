"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicInfo_1 = require("./MusicInfo");
var UserListDetail = (function () {
    function UserListDetail(id, name, coverImgUrl, createTime, trackCount, playCount) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "unknow"; }
        if (coverImgUrl === void 0) { coverImgUrl = "unknow"; }
        if (createTime === void 0) { createTime = -1; }
        if (trackCount === void 0) { trackCount = -1; }
        if (playCount === void 0) { playCount = -1; }
        this.tracks = new Array();
        this.id = id;
        this.name = name;
        this.coverImgUrl = coverImgUrl;
        this.createTime = createTime;
        this.trackCount = trackCount;
        this.playCount = playCount;
    }
    UserListDetail.prototype.buildByObject = function (_a) {
        var id = _a.id, name = _a.name, coverImgUrl = _a.coverImgUrl, createTime = _a.createTime, trackCount = _a.trackCount, playCount = _a.playCount;
        return new UserListDetail(id, name, coverImgUrl, createTime, trackCount, playCount);
    };
    UserListDetail.prototype.buildByPostResult = function (postResult) {
        var playlist = postResult.data.playlist;
        this.id = playlist.id;
        this.name = playlist.name;
        this.coverImgUrl = playlist.coverImgUrl;
        this.createTime = playlist.createTime;
        this.trackCount = playlist.trackCount;
        this.playCount = playlist.playCount;
        var songs = playlist.tracks;
        for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
            var song = songs_1[_i];
            var newMusicInfo = new MusicInfo_1.MusicInfo(song.id, song.al.name, song.al.picUrl, song.ar[0].name);
            this.tracks.push(newMusicInfo);
        }
        return this.tracks;
    };
    return UserListDetail;
}());
exports.UserListDetail = UserListDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3REZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckxpc3REZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBd0M7QUFFeEM7SUFVSSx3QkFBWSxFQUFXLEVBQUMsSUFBb0IsRUFBQyxXQUEyQixFQUFDLFVBQW9CLEVBQUMsVUFBb0IsRUFBQyxTQUFtQjtRQUExSCxtQkFBQSxFQUFBLE1BQVc7UUFBQyxxQkFBQSxFQUFBLGVBQW9CO1FBQUMsNEJBQUEsRUFBQSxzQkFBMkI7UUFBQywyQkFBQSxFQUFBLGNBQW1CLENBQUM7UUFBQywyQkFBQSxFQUFBLGNBQW1CLENBQUM7UUFBQywwQkFBQSxFQUFBLGFBQWtCLENBQUM7UUFGdEksV0FBTSxHQUFvQixJQUFJLEtBQUssRUFBYSxDQUFDO1FBRzdDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEVBQXFEO1lBQXBELFVBQUUsRUFBQyxjQUFJLEVBQUMsNEJBQVcsRUFBQywwQkFBVSxFQUFDLDBCQUFVLEVBQUMsd0JBQVM7UUFDckUsT0FBTyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEIsVUFBeUIsVUFBVTtRQUMvQixJQUFJLFFBQVEsR0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hDLEtBQWdCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUM7WUFBbEIsSUFBSSxJQUFJLGNBQUE7WUFDUixJQUFJLFlBQVksR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXNpY0luZm8gfSBmcm9tIFwiLi9NdXNpY0luZm9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTGlzdERldGFpbHtcclxuICAgIGlkOm51bWJlcjsgICAgICAgICAgLy8g5q2M5Y2VaWRcclxuICAgIG5hbWU6c3RyaW5nOyAgICAgICAgLy8g5q2M5Y2V5ZCNXHJcbiAgICBjb3ZlckltZ1VybDpzdHJpbmc7IC8vIOatjOWNleWbvueJh1xyXG4gICAgY3JlYXRlVGltZTpudW1iZXI7ICAvLyDliJvlu7rml7bpl7TvvIjml7bpl7TmiLPvvIlcclxuICAgIHRyYWNrQ291bnQ6bnVtYmVyOyAgLy8g5q2M5puy5pWwXHJcbiAgICBwbGF5Q291bnQ6bnVtYmVyOyAgIC8vIOatjOWNleaSreaUvuaVsFxyXG5cclxuICAgIHRyYWNrczpBcnJheTxNdXNpY0luZm8+ID0gbmV3IEFycmF5PE11c2ljSW5mbz4oKTsgICAvL+atjOWNleivpue7hlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcj0wLG5hbWU6c3RyaW5nPVwidW5rbm93XCIsY292ZXJJbWdVcmw6c3RyaW5nPVwidW5rbm93XCIsY3JlYXRlVGltZTpudW1iZXI9LTEsdHJhY2tDb3VudDpudW1iZXI9LTEscGxheUNvdW50Om51bWJlcj0tMSl7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb3ZlckltZ1VybCA9IGNvdmVySW1nVXJsO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGltZSA9IGNyZWF0ZVRpbWU7XHJcbiAgICAgICAgdGhpcy50cmFja0NvdW50ID0gdHJhY2tDb3VudDtcclxuICAgICAgICB0aGlzLnBsYXlDb3VudCA9IHBsYXlDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYnVpbGRCeU9iamVjdCh7aWQsbmFtZSxjb3ZlckltZ1VybCxjcmVhdGVUaW1lLHRyYWNrQ291bnQscGxheUNvdW50fSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyTGlzdERldGFpbChpZCxuYW1lLGNvdmVySW1nVXJsLGNyZWF0ZVRpbWUsdHJhY2tDb3VudCxwbGF5Q291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBidWlsZEJ5UG9zdFJlc3VsdChwb3N0UmVzdWx0KXtcclxuICAgICAgICBsZXQgcGxheWxpc3Q6YW55ID0gcG9zdFJlc3VsdC5kYXRhLnBsYXlsaXN0O1xyXG4gICAgICAgIHRoaXMuaWQgPSBwbGF5bGlzdC5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwbGF5bGlzdC5uYW1lO1xyXG4gICAgICAgIHRoaXMuY292ZXJJbWdVcmwgPSBwbGF5bGlzdC5jb3ZlckltZ1VybDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRpbWUgPSBwbGF5bGlzdC5jcmVhdGVUaW1lO1xyXG4gICAgICAgIHRoaXMudHJhY2tDb3VudCA9IHBsYXlsaXN0LnRyYWNrQ291bnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5Q291bnQgPSBwbGF5bGlzdC5wbGF5Q291bnQ7XHJcbiAgICAgICAgbGV0IHNvbmdzOmFueSA9IHBsYXlsaXN0LnRyYWNrcztcclxuICAgICAgICBmb3IobGV0IHNvbmcgb2Ygc29uZ3Mpe1xyXG4gICAgICAgICAgICBsZXQgbmV3TXVzaWNJbmZvID0gbmV3IE11c2ljSW5mbyhzb25nLmlkLHNvbmcuYWwubmFtZSxzb25nLmFsLnBpY1VybCxzb25nLmFyWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYWNrcy5wdXNoKG5ld011c2ljSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWNrcztcclxuICAgIH1cclxuXHJcbn0iXX0=