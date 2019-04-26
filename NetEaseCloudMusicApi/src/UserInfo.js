"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserInfo = (function () {
    function UserInfo(userId, nickname, gender, avatarUrl) {
        this.userId = userId;
        this.nickname = nickname;
        this.gender = gender;
        this.avatarUrl = avatarUrl;
    }
    UserInfo.buildByObject = function (_a) {
        var userId = _a.userId, nickname = _a.nickname, gender = _a.gender, avatarUrl = _a.avatarUrl;
        return new UserInfo(userId, nickname, gender, avatarUrl);
    };
    UserInfo.buildByPostResult = function (postResult) {
        var userList = new Array();
        var users = postResult.data.result.userprofiles;
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            var userInfo = new UserInfo(user.userId, user.nickname, user.gender, user.avatarUrl);
            userList.push(userInfo);
        }
        return userList;
    };
    return UserInfo;
}());
exports.UserInfo = UserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtJLGtCQUFZLE1BQWEsRUFBQyxRQUFlLEVBQUMsTUFBYSxFQUFDLFNBQWdCO1FBQ3BFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFNYSxzQkFBYSxHQUEzQixVQUE0QixFQUFrQztZQUFqQyxrQkFBTSxFQUFDLHNCQUFRLEVBQUMsa0JBQU0sRUFBQyx3QkFBUztRQUN6RCxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFNYSwwQkFBaUIsR0FBL0IsVUFBZ0MsVUFBVTtRQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNwRCxLQUFnQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFDO1lBQWxCLElBQUksSUFBSSxjQUFBO1lBQ1IsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xGLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUwsZUFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlckluZm97XHJcbiAgICB1c2VySWQ6bnVtYmVyOyAgICAgIC8vIOeUqOaIt2lkXHJcbiAgICBuaWNrbmFtZTpzdHJpbmc7ICAgIC8vIOeUqOaIt+WQjeensFxyXG4gICAgZ2VuZGVyOm51bWJlcjsgICAgICAvLyAwLS3mnKrorr7nva4gIDEtLeeUtyAgMi0t5aWzXHJcbiAgICBhdmF0YXJVcmw6c3RyaW5nOyAgIC8vIOeUqOaIt+WktOWDj1VybFxyXG4gICAgY29uc3RydWN0b3IodXNlcklkOm51bWJlcixuaWNrbmFtZTpzdHJpbmcsZ2VuZGVyOm51bWJlcixhdmF0YXJVcmw6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gbmlja25hbWU7XHJcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBnZW5kZXI7XHJcbiAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSBhdmF0YXJVcmw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog5a+56LGh6Kej5p6E6LWL5YC8XHJcbiAgICAgKiBAcGFyYW0gcGFyYW0wIOWvueixoSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEJ5T2JqZWN0KHt1c2VySWQsbmlja25hbWUsZ2VuZGVyLGF2YXRhclVybH0pOlVzZXJJbmZve1xyXG4gICAgICAgIHJldHVybiBuZXcgVXNlckluZm8odXNlcklkLG5pY2tuYW1lLGdlbmRlcixhdmF0YXJVcmwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+H572R57uc6K+35rGC57uT5p6c5p6E6YCgXHJcbiAgICAgKiBAcGFyYW0gcG9zdFJlc3VsdCDnvZHnu5zor7fmsYLnu5PmnpxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEJ5UG9zdFJlc3VsdChwb3N0UmVzdWx0KTpBcnJheTxVc2VySW5mbz57XHJcbiAgICAgICAgbGV0IHVzZXJMaXN0ID0gbmV3IEFycmF5PFVzZXJJbmZvPigpO1xyXG4gICAgICAgIGxldCB1c2VyczphbnkgPSBwb3N0UmVzdWx0LmRhdGEucmVzdWx0LnVzZXJwcm9maWxlcztcclxuICAgICAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpe1xyXG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSBuZXcgVXNlckluZm8odXNlci51c2VySWQsdXNlci5uaWNrbmFtZSx1c2VyLmdlbmRlcix1c2VyLmF2YXRhclVybCk7XHJcbiAgICAgICAgICAgIHVzZXJMaXN0LnB1c2godXNlckluZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXNlckxpc3Q7XHJcbiAgICB9XHJcblxyXG59Il19