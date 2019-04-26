"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = require("./Request");
var UserList_1 = require("./UserList");
var Crypto_1 = require("./Crypto");
var UserListHelper = (function () {
    function UserListHelper(userId) {
        this.searchUrl = "https://music.163.com/weapi/user/playlist";
        this.offset = 0;
        this.limit = 1000;
        this.userList = new Array();
        this.userId = userId;
    }
    UserListHelper.prototype.getAllLists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var originData, timer, cryptoData, urlData, postResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originData = {
                            "offset": this.offset,
                            "uid": this.userId,
                            "limit": this.limit,
                            "csrf_token": ""
                        };
                        timer = 0;
                        _a.label = 1;
                    case 1:
                        cryptoData = Crypto_1.Crypto.encrypt(originData);
                        urlData = "params=" + cryptoData.params + "&encSecKey=" + cryptoData.encSecKey;
                        return [4, Request_1.Request.post(this.searchUrl, urlData)];
                    case 2:
                        postResult = _a.sent();
                        timer++;
                        _a.label = 3;
                    case 3:
                        if (postResult.data == "" && timer < 20) return [3, 1];
                        _a.label = 4;
                    case 4:
                        this.userList = UserList_1.UserList.buildByPostResult(postResult);
                        return [2, this.userList];
                }
            });
        });
    };
    UserListHelper.prototype.getILikeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var originData, timer, cryptoData, postResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originData = {
                            "offset": this.offset,
                            "uid": this.userId,
                            "limit": this.limit,
                            "csrf_token": ""
                        };
                        timer = 0;
                        _a.label = 1;
                    case 1:
                        cryptoData = Crypto_1.Crypto.encrypt(originData);
                        return [4, Request_1.Request.post(this.searchUrl, cryptoData)];
                    case 2:
                        postResult = _a.sent();
                        timer++;
                        _a.label = 3;
                    case 3:
                        if (postResult.data == "" && timer < 20) return [3, 1];
                        _a.label = 4;
                    case 4:
                        this.userList = UserList_1.UserList.buildByPostResult(postResult);
                        return [2, this.userList[0]];
                }
            });
        });
    };
    return UserListHelper;
}());
exports.UserListHelper = UserListHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3RIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckxpc3RIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFrQztBQUNsQyx1Q0FBb0M7QUFDcEMsbUNBQWdDO0FBQ2hDO0lBVUksd0JBQVksTUFBYTtRQVJ6QixjQUFTLEdBQVUsMkNBQTJDLENBQUM7UUFDL0QsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBS2xCLGFBQVEsR0FBbUIsSUFBSSxLQUFLLEVBQVksQ0FBQztRQUU3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBS1ksb0NBQVcsR0FBeEI7Ozs7Ozt3QkFDUSxVQUFVLEdBQUc7NEJBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNOzRCQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ2xCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSzs0QkFDbkIsWUFBWSxFQUFFLEVBQUU7eUJBQ25CLENBQUE7d0JBQ0csS0FBSyxHQUFFLENBQUMsQ0FBQzs7O3dCQUtULFVBQVUsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4QyxPQUFPLEdBQUcsWUFBVSxVQUFVLENBQUMsTUFBTSxtQkFBYyxVQUFVLENBQUMsU0FBVyxDQUFDO3dCQUM3RCxXQUFNLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUF4RCxVQUFVLEdBQUcsU0FBMkMsQ0FBQzt3QkFDekQsS0FBSyxFQUFFLENBQUM7Ozs0QkFDRixVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxLQUFLLEdBQUMsRUFBRTs7O3dCQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3ZELFdBQU8sSUFBSSxDQUFDLFFBQVEsRUFBQzs7OztLQUN4QjtJQUtZLHFDQUFZLEdBQXpCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHOzRCQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTs0QkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNOzRCQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ25CLFlBQVksRUFBRSxFQUFFO3lCQUNuQixDQUFBO3dCQUNHLEtBQUssR0FBRSxDQUFDLENBQUM7Ozt3QkFJVCxVQUFVLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDM0IsV0FBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFBOzt3QkFBM0QsVUFBVSxHQUFHLFNBQThDLENBQUM7d0JBQzVELEtBQUssRUFBRSxDQUFDOzs7NEJBQ0YsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksS0FBSyxHQUFDLEVBQUU7Ozt3QkFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN2RCxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUM7Ozs7S0FDM0I7SUFDTCxxQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUEzRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlcXVlc3R9IGZyb20gXCIuL1JlcXVlc3RcIjtcclxuaW1wb3J0IHtVc2VyTGlzdH0gZnJvbSBcIi4vVXNlckxpc3RcIjtcclxuaW1wb3J0IHtDcnlwdG99IGZyb20gXCIuL0NyeXB0b1wiO1xyXG5leHBvcnQgY2xhc3MgVXNlckxpc3RIZWxwZXJ7XHJcbiAgICAvLyDlm7rlrprlgLxcclxuICAgIHNlYXJjaFVybDpzdHJpbmcgPSBcImh0dHBzOi8vbXVzaWMuMTYzLmNvbS93ZWFwaS91c2VyL3BsYXlsaXN0XCI7XHJcbiAgICBvZmZzZXQ6bnVtYmVyPTA7ICAgIC8v5LiN5YiG6aG1XHJcbiAgICBsaW1pdDpudW1iZXI9MTAwMDsgIC8vIOS4jeWIhumhteaYvuekuuacgOWkmjEwMDDmnaFcclxuICAgIC8vIOiuvuWumuWAvFxyXG4gICAgdXNlcklkOm51bWJlcjtcclxuICAgIFxyXG4gICAgLy8g6L+Q6KGM5pe25Lqn55Sf5YC8XHJcbiAgICB1c2VyTGlzdDpBcnJheTxVc2VyTGlzdD4gPSBuZXcgQXJyYXk8VXNlckxpc3Q+KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlueUqOaIt+aJgOacieatjOWNlVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWxsTGlzdHMoKXtcclxuICAgICAgICBsZXQgb3JpZ2luRGF0YSA9IHtcclxuICAgICAgICAgICAgXCJvZmZzZXRcIjogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgIFwidWlkXCI6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICBcImxpbWl0XCI6IHRoaXMubGltaXQsXHJcbiAgICAgICAgICAgIFwiY3NyZl90b2tlblwiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aW1lciA9MDtcclxuICAgICAgICBsZXQgY3J5cHRvRGF0YTtcclxuICAgICAgICBsZXQgdXJsRGF0YTtcclxuICAgICAgICBsZXQgcG9zdFJlc3VsdDogYW55O1xyXG4gICAgICAgIGRve1xyXG4gICAgICAgICAgICBjcnlwdG9EYXRhID0gQ3J5cHRvLmVuY3J5cHQob3JpZ2luRGF0YSk7XHJcbiAgICAgICAgICAgIHVybERhdGEgPSBgcGFyYW1zPSR7Y3J5cHRvRGF0YS5wYXJhbXN9JmVuY1NlY0tleT0ke2NyeXB0b0RhdGEuZW5jU2VjS2V5fWA7XHJcbiAgICAgICAgICAgIHBvc3RSZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LnBvc3QodGhpcy5zZWFyY2hVcmwsIHVybERhdGEpO1xyXG4gICAgICAgICAgICB0aW1lcisrO1xyXG4gICAgICAgICAgfXdoaWxlIChwb3N0UmVzdWx0LmRhdGEgPT0gXCJcIiAmJiB0aW1lcjwyMCk7XHJcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IFVzZXJMaXN0LmJ1aWxkQnlQb3N0UmVzdWx0KHBvc3RSZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W55So5oi35oiR5Zac5qyi5q2M5Y2VXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRJTGlrZUxpc3QoKXtcclxuICAgICAgICBsZXQgb3JpZ2luRGF0YSA9IHtcclxuICAgICAgICAgICAgXCJvZmZzZXRcIjogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgIFwidWlkXCI6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICBcImxpbWl0XCI6IHRoaXMubGltaXQsXHJcbiAgICAgICAgICAgIFwiY3NyZl90b2tlblwiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aW1lciA9MDtcclxuICAgICAgICBsZXQgY3J5cHRvRGF0YTtcclxuICAgICAgICBsZXQgcG9zdFJlc3VsdDogYW55O1xyXG4gICAgICAgIGRve1xyXG4gICAgICAgICAgICBjcnlwdG9EYXRhID0gQ3J5cHRvLmVuY3J5cHQob3JpZ2luRGF0YSk7XHJcbiAgICAgICAgICAgIHBvc3RSZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LnBvc3QodGhpcy5zZWFyY2hVcmwsIGNyeXB0b0RhdGEpO1xyXG4gICAgICAgICAgICB0aW1lcisrO1xyXG4gICAgICAgICAgfXdoaWxlIChwb3N0UmVzdWx0LmRhdGEgPT0gXCJcIiAmJiB0aW1lcjwyMCk7XHJcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IFVzZXJMaXN0LmJ1aWxkQnlQb3N0UmVzdWx0KHBvc3RSZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMaXN0WzBdO1xyXG4gICAgfVxyXG59Il19