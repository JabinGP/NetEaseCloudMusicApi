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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVNJLGtCQUFZLEVBQVcsRUFBQyxJQUFvQixFQUFDLFdBQTJCLEVBQUMsVUFBb0IsRUFBQyxVQUFvQixFQUFDLFNBQW1CO1FBQTFILG1CQUFBLEVBQUEsTUFBVztRQUFDLHFCQUFBLEVBQUEsZUFBb0I7UUFBQyw0QkFBQSxFQUFBLHNCQUEyQjtRQUFDLDJCQUFBLEVBQUEsY0FBbUIsQ0FBQztRQUFDLDJCQUFBLEVBQUEsY0FBbUIsQ0FBQztRQUFDLDBCQUFBLEVBQUEsYUFBa0IsQ0FBQztRQUNsSSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFHYSxzQkFBYSxHQUEzQixVQUE0QixFQUFrRjtZQUFqRixVQUFJLEVBQUosMkJBQUksRUFBQyxZQUFhLEVBQWIsb0NBQWEsRUFBQyxtQkFBb0IsRUFBcEIsMkNBQW9CLEVBQUMsa0JBQWEsRUFBYixvQ0FBYSxFQUFDLGtCQUFhLEVBQWIsb0NBQWEsRUFBQyxpQkFBWSxFQUFaLG1DQUFZO1FBQ3pHLE9BQU8sSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRWEsMEJBQWlCLEdBQS9CLFVBQWdDLFVBQVU7UUFDdEMsSUFBSSxTQUFTLEdBQW1CLElBQUksS0FBSyxFQUFZLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekMsS0FBZ0IsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBQztZQUFsQixJQUFJLElBQUksY0FBQTtZQUNSLElBQUksV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEgsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyTGlzdHtcclxuICAgIGlkOm51bWJlcjsgICAgICAgICAgLy8g5q2M5Y2VaWRcclxuICAgIG5hbWU6c3RyaW5nOyAgICAgICAgLy8g5q2M5Y2V5ZCNXHJcbiAgICBjb3ZlckltZ1VybDpzdHJpbmc7IC8vIOatjOWNleWbvueJh1xyXG4gICAgY3JlYXRlVGltZTpudW1iZXI7ICAvLyDliJvlu7rml7bpl7TvvIjml7bpl7TmiLPvvIlcclxuICAgIHRyYWNrQ291bnQ6bnVtYmVyOyAgLy8g5q2M5puy5pWwXHJcbiAgICBwbGF5Q291bnQ6bnVtYmVyOyAgIC8vIOatjOWNleaSreaUvuaVsFxyXG4gICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXI9MCxuYW1lOnN0cmluZz1cInVua25vd1wiLGNvdmVySW1nVXJsOnN0cmluZz1cInVua25vd1wiLGNyZWF0ZVRpbWU6bnVtYmVyPS0xLHRyYWNrQ291bnQ6bnVtYmVyPS0xLHBsYXlDb3VudDpudW1iZXI9LTEpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY292ZXJJbWdVcmwgPSBjb3ZlckltZ1VybDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRpbWUgPSBjcmVhdGVUaW1lO1xyXG4gICAgICAgIHRoaXMudHJhY2tDb3VudCA9IHRyYWNrQ291bnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5Q291bnQgPSBwbGF5Q291bnQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQnlPYmplY3Qoe2lkPTAsbmFtZT1cInVua25vd1wiLGNvdmVySW1nVXJsPVwidW5rbm93XCIsY3JlYXRlVGltZT0tMSx0cmFja0NvdW50PS0xLHBsYXlDb3VudD0tMX0pe1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlckxpc3QoaWQsbmFtZSxjb3ZlckltZ1VybCxjcmVhdGVUaW1lLHRyYWNrQ291bnQscGxheUNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQnlQb3N0UmVzdWx0KHBvc3RSZXN1bHQpOkFycmF5PFVzZXJMaXN0PntcclxuICAgICAgICBsZXQgVXNlckxpc3RzOkFycmF5PFVzZXJMaXN0PiA9IG5ldyBBcnJheTxVc2VyTGlzdD4oKTtcclxuICAgICAgICBsZXQgbGlzdHM6YW55ID0gcG9zdFJlc3VsdC5kYXRhLnBsYXlsaXN0O1xyXG4gICAgICAgIGZvcihsZXQgbGlzdCBvZiBsaXN0cyl7XHJcbiAgICAgICAgICAgIGxldCBuZXdVc2VyTGlzdCA9IG5ldyBVc2VyTGlzdChsaXN0LmlkLGxpc3QubmFtZSxsaXN0LmNvdmVySW1nVXJsLGxpc3QuY3JlYXRlVGltZSxsaXN0LnRyYWNrQ291bnQsbGlzdC5wbGF5Q291bnQpO1xyXG4gICAgICAgICAgICBVc2VyTGlzdHMucHVzaChuZXdVc2VyTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVc2VyTGlzdHM7XHJcbiAgICB9XHJcbn0iXX0=