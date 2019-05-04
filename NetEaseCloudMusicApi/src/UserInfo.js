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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUtJLGtCQUFZLE1BQWEsRUFBQyxRQUFlLEVBQUMsTUFBYSxFQUFDLFNBQWdCO1FBQ3BFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFNYSxzQkFBYSxHQUEzQixVQUE0QixFQUFrQztZQUFqQyxrQkFBTSxFQUFDLHNCQUFRLEVBQUMsa0JBQU0sRUFBQyx3QkFBUztRQUN6RCxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFNYSwwQkFBaUIsR0FBL0IsVUFBZ0MsVUFBVTtRQUN0QyxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNwRCxLQUFnQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFDO1lBQWxCLElBQUksSUFBSSxjQUFBO1lBQ1IsSUFBSSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xGLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUwsZUFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlckluZm97XG4gICAgdXNlcklkOm51bWJlcjsgICAgICAvLyDnlKjmiLdpZFxuICAgIG5pY2tuYW1lOnN0cmluZzsgICAgLy8g55So5oi35ZCN56ewXG4gICAgZ2VuZGVyOm51bWJlcjsgICAgICAvLyAwLS3mnKrorr7nva4gIDEtLeeUtyAgMi0t5aWzXG4gICAgYXZhdGFyVXJsOnN0cmluZzsgICAvLyDnlKjmiLflpLTlg49VcmxcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQ6bnVtYmVyLG5pY2tuYW1lOnN0cmluZyxnZW5kZXI6bnVtYmVyLGF2YXRhclVybDpzdHJpbmcpe1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IG5pY2tuYW1lO1xuICAgICAgICB0aGlzLmdlbmRlciA9IGdlbmRlcjtcbiAgICAgICAgdGhpcy5hdmF0YXJVcmwgPSBhdmF0YXJVcmw7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIOWvueixoeino+aehOi1i+WAvFxuICAgICAqIEBwYXJhbSBwYXJhbTAg5a+56LGhIFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRCeU9iamVjdCh7dXNlcklkLG5pY2tuYW1lLGdlbmRlcixhdmF0YXJVcmx9KTpVc2VySW5mb3tcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VySW5mbyh1c2VySWQsbmlja25hbWUsZ2VuZGVyLGF2YXRhclVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YCa6L+H572R57uc6K+35rGC57uT5p6c5p6E6YCgXG4gICAgICogQHBhcmFtIHBvc3RSZXN1bHQg572R57uc6K+35rGC57uT5p6cXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEJ5UG9zdFJlc3VsdChwb3N0UmVzdWx0KTpBcnJheTxVc2VySW5mbz57XG4gICAgICAgIGxldCB1c2VyTGlzdCA9IG5ldyBBcnJheTxVc2VySW5mbz4oKTtcbiAgICAgICAgbGV0IHVzZXJzOmFueSA9IHBvc3RSZXN1bHQuZGF0YS5yZXN1bHQudXNlcnByb2ZpbGVzO1xuICAgICAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpe1xuICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHVzZXIudXNlcklkLHVzZXIubmlja25hbWUsdXNlci5nZW5kZXIsdXNlci5hdmF0YXJVcmwpO1xuICAgICAgICAgICAgdXNlckxpc3QucHVzaCh1c2VySW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJMaXN0O1xuICAgIH1cblxufSJdfQ==