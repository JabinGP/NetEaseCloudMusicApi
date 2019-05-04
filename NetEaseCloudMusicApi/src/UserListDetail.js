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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3REZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckxpc3REZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBd0M7QUFFeEM7SUFVSSx3QkFBWSxFQUFXLEVBQUMsSUFBb0IsRUFBQyxXQUEyQixFQUFDLFVBQW9CLEVBQUMsVUFBb0IsRUFBQyxTQUFtQjtRQUExSCxtQkFBQSxFQUFBLE1BQVc7UUFBQyxxQkFBQSxFQUFBLGVBQW9CO1FBQUMsNEJBQUEsRUFBQSxzQkFBMkI7UUFBQywyQkFBQSxFQUFBLGNBQW1CLENBQUM7UUFBQywyQkFBQSxFQUFBLGNBQW1CLENBQUM7UUFBQywwQkFBQSxFQUFBLGFBQWtCLENBQUM7UUFGdEksV0FBTSxHQUFvQixJQUFJLEtBQUssRUFBYSxDQUFDO1FBRzdDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEVBQXFEO1lBQXBELFVBQUUsRUFBQyxjQUFJLEVBQUMsNEJBQVcsRUFBQywwQkFBVSxFQUFDLDBCQUFVLEVBQUMsd0JBQVM7UUFDckUsT0FBTyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTSwwQ0FBaUIsR0FBeEIsVUFBeUIsVUFBVTtRQUMvQixJQUFJLFFBQVEsR0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hDLEtBQWdCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUM7WUFBbEIsSUFBSSxJQUFJLGNBQUE7WUFDUixJQUFJLFlBQVksR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXNpY0luZm8gfSBmcm9tIFwiLi9NdXNpY0luZm9cIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0RGV0YWlse1xuICAgIGlkOm51bWJlcjsgICAgICAgICAgLy8g5q2M5Y2VaWRcbiAgICBuYW1lOnN0cmluZzsgICAgICAgIC8vIOatjOWNleWQjVxuICAgIGNvdmVySW1nVXJsOnN0cmluZzsgLy8g5q2M5Y2V5Zu+54mHXG4gICAgY3JlYXRlVGltZTpudW1iZXI7ICAvLyDliJvlu7rml7bpl7TvvIjml7bpl7TmiLPvvIlcbiAgICB0cmFja0NvdW50Om51bWJlcjsgIC8vIOatjOabsuaVsFxuICAgIHBsYXlDb3VudDpudW1iZXI7ICAgLy8g5q2M5Y2V5pKt5pS+5pWwXG5cbiAgICB0cmFja3M6QXJyYXk8TXVzaWNJbmZvPiA9IG5ldyBBcnJheTxNdXNpY0luZm8+KCk7ICAgLy/mrYzljZXor6bnu4ZcblxuICAgIGNvbnN0cnVjdG9yKGlkOm51bWJlcj0wLG5hbWU6c3RyaW5nPVwidW5rbm93XCIsY292ZXJJbWdVcmw6c3RyaW5nPVwidW5rbm93XCIsY3JlYXRlVGltZTpudW1iZXI9LTEsdHJhY2tDb3VudDpudW1iZXI9LTEscGxheUNvdW50Om51bWJlcj0tMSl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb3ZlckltZ1VybCA9IGNvdmVySW1nVXJsO1xuICAgICAgICB0aGlzLmNyZWF0ZVRpbWUgPSBjcmVhdGVUaW1lO1xuICAgICAgICB0aGlzLnRyYWNrQ291bnQgPSB0cmFja0NvdW50O1xuICAgICAgICB0aGlzLnBsYXlDb3VudCA9IHBsYXlDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRCeU9iamVjdCh7aWQsbmFtZSxjb3ZlckltZ1VybCxjcmVhdGVUaW1lLHRyYWNrQ291bnQscGxheUNvdW50fSl7XG4gICAgICAgIHJldHVybiBuZXcgVXNlckxpc3REZXRhaWwoaWQsbmFtZSxjb3ZlckltZ1VybCxjcmVhdGVUaW1lLHRyYWNrQ291bnQscGxheUNvdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRCeVBvc3RSZXN1bHQocG9zdFJlc3VsdCl7XG4gICAgICAgIGxldCBwbGF5bGlzdDphbnkgPSBwb3N0UmVzdWx0LmRhdGEucGxheWxpc3Q7XG4gICAgICAgIHRoaXMuaWQgPSBwbGF5bGlzdC5pZDtcbiAgICAgICAgdGhpcy5uYW1lID0gcGxheWxpc3QubmFtZTtcbiAgICAgICAgdGhpcy5jb3ZlckltZ1VybCA9IHBsYXlsaXN0LmNvdmVySW1nVXJsO1xuICAgICAgICB0aGlzLmNyZWF0ZVRpbWUgPSBwbGF5bGlzdC5jcmVhdGVUaW1lO1xuICAgICAgICB0aGlzLnRyYWNrQ291bnQgPSBwbGF5bGlzdC50cmFja0NvdW50O1xuICAgICAgICB0aGlzLnBsYXlDb3VudCA9IHBsYXlsaXN0LnBsYXlDb3VudDtcbiAgICAgICAgbGV0IHNvbmdzOmFueSA9IHBsYXlsaXN0LnRyYWNrcztcbiAgICAgICAgZm9yKGxldCBzb25nIG9mIHNvbmdzKXtcbiAgICAgICAgICAgIGxldCBuZXdNdXNpY0luZm8gPSBuZXcgTXVzaWNJbmZvKHNvbmcuaWQsc29uZy5hbC5uYW1lLHNvbmcuYWwucGljVXJsLHNvbmcuYXJbMF0ubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnRyYWNrcy5wdXNoKG5ld011c2ljSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tzO1xuICAgIH1cblxufSJdfQ==