"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserList = (function () {
    function UserList(id, name, coverImgUrl, createTime, trackCount, playCount) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "unknow"; }
        if (coverImgUrl === void 0) { coverImgUrl = "unknow"; }
        if (createTime === void 0) { createTime = -1; }
        if (trackCount === void 0) { trackCount = -1; }
        if (playCount === void 0) { playCount = -1; }
        this.id = id;
        this.name = name;
        this.coverImgUrl = coverImgUrl;
        this.createTime = createTime;
        this.trackCount = trackCount;
        this.playCount = playCount;
    }
    UserList.buildByObject = function (_a) {
        var _b = _a.id, id = _b === void 0 ? 0 : _b, _c = _a.name, name = _c === void 0 ? "unknow" : _c, _d = _a.coverImgUrl, coverImgUrl = _d === void 0 ? "unknow" : _d, _e = _a.createTime, createTime = _e === void 0 ? -1 : _e, _f = _a.trackCount, trackCount = _f === void 0 ? -1 : _f, _g = _a.playCount, playCount = _g === void 0 ? -1 : _g;
        return new UserList(id, name, coverImgUrl, createTime, trackCount, playCount);
    };
    UserList.buildByPostResult = function (postResult) {
        var UserLists = new Array();
        var lists = postResult.data.playlist;
        for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
            var list = lists_1[_i];
            var newUserList = new UserList(list.id, list.name, list.coverImgUrl, list.createTime, list.trackCount, list.playCount);
            UserLists.push(newUserList);
        }
        return UserLists;
    };
    return UserList;
}());
exports.UserList = UserList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVNJLGtCQUFZLEVBQVcsRUFBQyxJQUFvQixFQUFDLFdBQTJCLEVBQUMsVUFBb0IsRUFBQyxVQUFvQixFQUFDLFNBQW1CO1FBQTFILG1CQUFBLEVBQUEsTUFBVztRQUFDLHFCQUFBLEVBQUEsZUFBb0I7UUFBQyw0QkFBQSxFQUFBLHNCQUEyQjtRQUFDLDJCQUFBLEVBQUEsY0FBbUIsQ0FBQztRQUFDLDJCQUFBLEVBQUEsY0FBbUIsQ0FBQztRQUFDLDBCQUFBLEVBQUEsYUFBa0IsQ0FBQztRQUNsSSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFHYSxzQkFBYSxHQUEzQixVQUE0QixFQUFrRjtZQUFqRixVQUFJLEVBQUosMkJBQUksRUFBQyxZQUFhLEVBQWIsb0NBQWEsRUFBQyxtQkFBb0IsRUFBcEIsMkNBQW9CLEVBQUMsa0JBQWEsRUFBYixvQ0FBYSxFQUFDLGtCQUFhLEVBQWIsb0NBQWEsRUFBQyxpQkFBWSxFQUFaLG1DQUFZO1FBQ3pHLE9BQU8sSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRWEsMEJBQWlCLEdBQS9CLFVBQWdDLFVBQVU7UUFDdEMsSUFBSSxTQUFTLEdBQW1CLElBQUksS0FBSyxFQUFZLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsS0FBZ0IsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBQztZQUFsQixJQUFJLElBQUksY0FBQTtZQUNSLElBQUksV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEgsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyTGlzdHtcbiAgICBpZDpudW1iZXI7ICAgICAgICAgIC8vIOatjOWNlWlkXG4gICAgbmFtZTpzdHJpbmc7ICAgICAgICAvLyDmrYzljZXlkI1cbiAgICBjb3ZlckltZ1VybDpzdHJpbmc7IC8vIOatjOWNleWbvueJh1xuICAgIGNyZWF0ZVRpbWU6bnVtYmVyOyAgLy8g5Yib5bu65pe26Ze077yI5pe26Ze05oiz77yJXG4gICAgdHJhY2tDb3VudDpudW1iZXI7ICAvLyDmrYzmm7LmlbBcbiAgICBwbGF5Q291bnQ6bnVtYmVyOyAgIC8vIOatjOWNleaSreaUvuaVsFxuICAgXG5cbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXI9MCxuYW1lOnN0cmluZz1cInVua25vd1wiLGNvdmVySW1nVXJsOnN0cmluZz1cInVua25vd1wiLGNyZWF0ZVRpbWU6bnVtYmVyPS0xLHRyYWNrQ291bnQ6bnVtYmVyPS0xLHBsYXlDb3VudDpudW1iZXI9LTEpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY292ZXJJbWdVcmwgPSBjb3ZlckltZ1VybDtcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lID0gY3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy50cmFja0NvdW50ID0gdHJhY2tDb3VudDtcbiAgICAgICAgdGhpcy5wbGF5Q291bnQgPSBwbGF5Q291bnQ7XG4gICAgfVxuICAgIFxuXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEJ5T2JqZWN0KHtpZD0wLG5hbWU9XCJ1bmtub3dcIixjb3ZlckltZ1VybD1cInVua25vd1wiLGNyZWF0ZVRpbWU9LTEsdHJhY2tDb3VudD0tMSxwbGF5Q291bnQ9LTF9KXtcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyTGlzdChpZCxuYW1lLGNvdmVySW1nVXJsLGNyZWF0ZVRpbWUsdHJhY2tDb3VudCxwbGF5Q291bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRCeVBvc3RSZXN1bHQocG9zdFJlc3VsdCk6QXJyYXk8VXNlckxpc3Q+e1xuICAgICAgICBsZXQgVXNlckxpc3RzOkFycmF5PFVzZXJMaXN0PiA9IG5ldyBBcnJheTxVc2VyTGlzdD4oKTtcbiAgICAgICAgbGV0IGxpc3RzOmFueSA9IHBvc3RSZXN1bHQuZGF0YS5wbGF5bGlzdDtcbiAgICAgICAgZm9yKGxldCBsaXN0IG9mIGxpc3RzKXtcbiAgICAgICAgICAgIGxldCBuZXdVc2VyTGlzdCA9IG5ldyBVc2VyTGlzdChsaXN0LmlkLGxpc3QubmFtZSxsaXN0LmNvdmVySW1nVXJsLGxpc3QuY3JlYXRlVGltZSxsaXN0LnRyYWNrQ291bnQsbGlzdC5wbGF5Q291bnQpO1xuICAgICAgICAgICAgVXNlckxpc3RzLnB1c2gobmV3VXNlckxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVc2VyTGlzdHM7XG4gICAgfVxufSJdfQ==