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
        var songs = postResult.data.result.songs;
        for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
            var song = songs_1[_i];
            var newMusicInfo = new MusicInfo(song.id, song.name, song.album.picUrl, song.artists[0].name);
            songList.push(newMusicInfo);
        }
        return songList;
    };
    return MusicInfo;
}());
exports.MusicInfo = MusicInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNJbmZvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHNfc3JjL011c2ljSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBS0ksbUJBQVksRUFBVyxFQUFDLElBQW9CLEVBQUMsTUFBc0IsRUFBQyxXQUEyQjtRQUFuRixtQkFBQSxFQUFBLE1BQVc7UUFBQyxxQkFBQSxFQUFBLGVBQW9CO1FBQUMsdUJBQUEsRUFBQSxpQkFBc0I7UUFBQyw0QkFBQSxFQUFBLHNCQUEyQjtRQUMzRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFHYSx1QkFBYSxHQUEzQixVQUE0QixFQUE0QjtZQUEzQixVQUFFLEVBQUMsY0FBSSxFQUFDLGtCQUFNLEVBQUMsNEJBQVc7UUFDbkQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ2EsMkJBQWlCLEdBQS9CLFVBQWdDLFVBQVU7UUFDdEMsSUFBSSxRQUFRLEdBQW9CLElBQUksS0FBSyxFQUFhLENBQUM7UUFDdkQsSUFBSSxLQUFLLEdBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdDLEtBQWdCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUM7WUFBbEIsSUFBSSxJQUFJLGNBQUE7WUFDUixJQUFJLFlBQVksR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRixRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNdXNpY0luZm97XHJcbiAgICBpZDpudW1iZXI7ICAgICAgICAgIC8vIOatjOabsmlkXHJcbiAgICBuYW1lOnN0cmluZzsgICAgICAgIC8vIOatjOabsuWQjVxyXG4gICAgcGljVXJsOnN0cmluZzsgICAgICAvLyDkuJPovpHlm77niYdcclxuICAgIGFydGlzdHNOYW1lOnN0cmluZzsgLy8g6Im65pyv5a625ZCN5a2XXHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXI9MCxuYW1lOnN0cmluZz1cInVua25vd1wiLHBpY1VybDpzdHJpbmc9XCJ1bmtub3dcIixhcnRpc3RzTmFtZTpzdHJpbmc9XCJ1bmtub3dcIil7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5waWNVcmwgPSBwaWNVcmw7XHJcbiAgICAgICAgdGhpcy5hcnRpc3RzTmFtZSA9IGFydGlzdHNOYW1lO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEJ5T2JqZWN0KHtpZCxuYW1lLHBpY1VybCxhcnRpc3RzTmFtZX0pe1xyXG4gICAgICAgIHJldHVybiBuZXcgTXVzaWNJbmZvKGlkLG5hbWUscGljVXJsLGFydGlzdHNOYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRCeVBvc3RSZXN1bHQocG9zdFJlc3VsdCk6QXJyYXk8TXVzaWNJbmZvPntcclxuICAgICAgICBsZXQgc29uZ0xpc3Q6QXJyYXk8TXVzaWNJbmZvPiA9IG5ldyBBcnJheTxNdXNpY0luZm8+KCk7XHJcbiAgICAgICAgbGV0IHNvbmdzOmFueSA9IHBvc3RSZXN1bHQuZGF0YS5yZXN1bHQuc29uZ3M7XHJcbiAgICAgICAgZm9yKGxldCBzb25nIG9mIHNvbmdzKXtcclxuICAgICAgICAgICAgbGV0IG5ld011c2ljSW5mbyA9IG5ldyBNdXNpY0luZm8oc29uZy5pZCxzb25nLm5hbWUsc29uZy5hbGJ1bS5waWNVcmwsc29uZy5hcnRpc3RzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICBzb25nTGlzdC5wdXNoKG5ld011c2ljSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzb25nTGlzdDtcclxuICAgIH1cclxufSJdfQ==