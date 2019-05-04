"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicInfo = (function () {
    function MusicInfo(id, name, picUrl, artistsName) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "unknow"; }
        if (picUrl === void 0) { picUrl = "unknow"; }
        if (artistsName === void 0) { artistsName = "unknow"; }
        this.id = id;
        this.name = name;
        this.picUrl = picUrl;
        this.artistsName = artistsName;
    }
    MusicInfo.buildByObject = function (_a) {
        var id = _a.id, name = _a.name, picUrl = _a.picUrl, artistsName = _a.artistsName;
        return new MusicInfo(id, name, picUrl, artistsName);
    };
    MusicInfo.buildByPostResult = function (postResult) {
        var songList = new Array();
        if (postResult.data.result) {
            var songs = postResult.data.result.songs;
            for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
                var song = songs_1[_i];
                var newMusicInfo = new MusicInfo(song.id, song.name, song.album.picUrl, song.artists[0].name);
                songList.push(newMusicInfo);
            }
        }
        return songList;
    };
    return MusicInfo;
}());
exports.MusicInfo = MusicInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHNfc3JjL011c2ljSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBS0ksbUJBQVksRUFBVyxFQUFDLElBQW9CLEVBQUMsTUFBc0IsRUFBQyxXQUEyQjtRQUFuRixtQkFBQSxFQUFBLE1BQVc7UUFBQyxxQkFBQSxFQUFBLGVBQW9CO1FBQUMsdUJBQUEsRUFBQSxpQkFBc0I7UUFBQyw0QkFBQSxFQUFBLHNCQUEyQjtRQUMzRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFHYSx1QkFBYSxHQUEzQixVQUE0QixFQUE0QjtZQUEzQixVQUFFLEVBQUMsY0FBSSxFQUFDLGtCQUFNLEVBQUMsNEJBQVc7UUFDbkQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ2EsMkJBQWlCLEdBQS9CLFVBQWdDLFVBQVU7UUFDdEMsSUFBSSxRQUFRLEdBQW9CLElBQUksS0FBSyxFQUFhLENBQUM7UUFDdkQsSUFBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUN0QixJQUFJLEtBQUssR0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDN0MsS0FBZ0IsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBQztnQkFBbEIsSUFBSSxJQUFJLGNBQUE7Z0JBQ1IsSUFBSSxZQUFZLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0I7U0FDSjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTXVzaWNJbmZve1xuICAgIGlkOm51bWJlcjsgICAgICAgICAgLy8g5q2M5puyaWRcbiAgICBuYW1lOnN0cmluZzsgICAgICAgIC8vIOatjOabsuWQjVxuICAgIHBpY1VybDpzdHJpbmc7ICAgICAgLy8g5LiT6L6R5Zu+54mHXG4gICAgYXJ0aXN0c05hbWU6c3RyaW5nOyAvLyDoibrmnK/lrrblkI3lrZdcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXI9MCxuYW1lOnN0cmluZz1cInVua25vd1wiLHBpY1VybDpzdHJpbmc9XCJ1bmtub3dcIixhcnRpc3RzTmFtZTpzdHJpbmc9XCJ1bmtub3dcIil7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5waWNVcmwgPSBwaWNVcmw7XG4gICAgICAgIHRoaXMuYXJ0aXN0c05hbWUgPSBhcnRpc3RzTmFtZTtcbiAgICB9XG4gICAgXG5cbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQnlPYmplY3Qoe2lkLG5hbWUscGljVXJsLGFydGlzdHNOYW1lfSl7XG4gICAgICAgIHJldHVybiBuZXcgTXVzaWNJbmZvKGlkLG5hbWUscGljVXJsLGFydGlzdHNOYW1lKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBidWlsZEJ5UG9zdFJlc3VsdChwb3N0UmVzdWx0KTpBcnJheTxNdXNpY0luZm8+e1xuICAgICAgICBsZXQgc29uZ0xpc3Q6QXJyYXk8TXVzaWNJbmZvPiA9IG5ldyBBcnJheTxNdXNpY0luZm8+KCk7XG4gICAgICAgIGlmKHBvc3RSZXN1bHQuZGF0YS5yZXN1bHQpe1xuICAgICAgICAgICAgbGV0IHNvbmdzOmFueSA9IHBvc3RSZXN1bHQuZGF0YS5yZXN1bHQuc29uZ3M7XG4gICAgICAgICAgICBmb3IobGV0IHNvbmcgb2Ygc29uZ3Mpe1xuICAgICAgICAgICAgICAgIGxldCBuZXdNdXNpY0luZm8gPSBuZXcgTXVzaWNJbmZvKHNvbmcuaWQsc29uZy5uYW1lLHNvbmcuYWxidW0ucGljVXJsLHNvbmcuYXJ0aXN0c1swXS5uYW1lKTtcbiAgICAgICAgICAgICAgICBzb25nTGlzdC5wdXNoKG5ld011c2ljSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvbmdMaXN0O1xuICAgIH1cbn0iXX0=