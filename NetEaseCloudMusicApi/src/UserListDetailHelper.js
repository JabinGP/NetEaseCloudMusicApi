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
var Crypto_1 = require("./Crypto");
var UserListDetail_1 = require("./UserListDetail");
var UserListDetailHelper = (function () {
    function UserListDetailHelper(listId) {
        this.searchUrl = "https://music.163.com/weapi/v3/playlist/detail";
        this.offset = 0;
        this.limit = 1000;
        this.n = 1000;
        this.total = true;
        this.listDetail = new UserListDetail_1.UserListDetail();
        this.listId = listId;
    }
    UserListDetailHelper.prototype.getDeatil = function () {
        return __awaiter(this, void 0, void 0, function () {
            var originData, timer, cryptoData, urlData, postResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originData = {
                            "id": this.listId,
                            "offset": this.offset,
                            "total": this.total,
                            "limit": this.limit,
                            "n": this.n,
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
                        console.log(postResult);
                        this.listDetail.buildByPostResult(postResult);
                        return [2, this.listDetail];
                }
            });
        });
    };
    return UserListDetailHelper;
}());
exports.UserListDetailHelper = UserListDetailHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxpc3REZXRhaWxIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvVXNlckxpc3REZXRhaWxIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFrQztBQUNsQyxtQ0FBZ0M7QUFDaEMsbURBQWtEO0FBRWxEO0lBWUksOEJBQVksTUFBYTtRQVZ6QixjQUFTLEdBQVUsZ0RBQWdELENBQUM7UUFDcEUsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUNoQixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBQ2xCLE1BQUMsR0FBVSxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFVLElBQUksQ0FBQztRQUtwQixlQUFVLEdBQWdCLElBQUksK0JBQWMsRUFBRSxDQUFDO1FBRTNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFLWSx3Q0FBUyxHQUF0Qjs7Ozs7O3dCQUNRLFVBQVUsR0FBRTs0QkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTs0QkFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLOzRCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ25CLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs0QkFDWCxZQUFZLEVBQUUsRUFBRTt5QkFDakIsQ0FBQTt3QkFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7d0JBS1YsVUFBVSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hDLE9BQU8sR0FBRyxZQUFVLFVBQVUsQ0FBQyxNQUFNLG1CQUFjLFVBQVUsQ0FBQyxTQUFXLENBQUM7d0JBQzdELFdBQU0saUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBQTs7d0JBQXhELFVBQVUsR0FBRyxTQUEyQyxDQUFDO3dCQUN6RCxLQUFLLEVBQUUsQ0FBQzs7OzRCQUNILFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUssR0FBRyxFQUFFOzs7d0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlDLFdBQU8sSUFBSSxDQUFDLFVBQVUsRUFBQzs7OztLQUMxQjtJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlcXVlc3R9IGZyb20gXCIuL1JlcXVlc3RcIjtcclxuaW1wb3J0IHtDcnlwdG99IGZyb20gXCIuL0NyeXB0b1wiO1xyXG5pbXBvcnQgeyBVc2VyTGlzdERldGFpbCB9IGZyb20gXCIuL1VzZXJMaXN0RGV0YWlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckxpc3REZXRhaWxIZWxwZXJ7XHJcbiAgICAvLyDlm7rlrprlgLxcclxuICAgIHNlYXJjaFVybDpzdHJpbmcgPSBcImh0dHBzOi8vbXVzaWMuMTYzLmNvbS93ZWFwaS92My9wbGF5bGlzdC9kZXRhaWxcIjtcclxuICAgIG9mZnNldDpudW1iZXI9MDsgICAgLy8g5LiN5YiG6aG1XHJcbiAgICBsaW1pdDpudW1iZXI9MTAwMDsgIC8vIOS4jeWIhumhteaYvuekuuacgOWkmjEwMDDmnaFcclxuICAgIG46bnVtYmVyID0gMTAwMDsgICAgLy8g5pqC5pe25LiN55+l6YGTXHJcbiAgICB0b3RhbDpib29sZWFuID10cnVlOy8vIOaaguaXtuS4jeefpemBk1xyXG4gICAgLy8g6K6+5a6a5YC8XHJcbiAgICBsaXN0SWQ6bnVtYmVyO1xyXG4gICAgXHJcbiAgICAvLyDov5DooYzml7bkuqfnlJ/lgLxcclxuICAgIGxpc3REZXRhaWw6VXNlckxpc3REZXRhaWw9bmV3IFVzZXJMaXN0RGV0YWlsKCk7XHJcbiAgICBjb25zdHJ1Y3RvcihsaXN0SWQ6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxpc3RJZCA9IGxpc3RJZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruatjOWNlWlk6I635Y+W5q2M5Y2V5YaF5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXREZWF0aWwoKXtcclxuICAgICAgICBsZXQgb3JpZ2luRGF0YT0ge1xyXG4gICAgICAgICAgICBcImlkXCI6IHRoaXMubGlzdElkLFxyXG4gICAgICAgICAgICBcIm9mZnNldFwiOiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgXCJ0b3RhbFwiOiB0aGlzLnRvdGFsLFxyXG4gICAgICAgICAgICBcImxpbWl0XCI6IHRoaXMubGltaXQsXHJcbiAgICAgICAgICAgIFwiblwiOiB0aGlzLm4sXHJcbiAgICAgICAgICAgIFwiY3NyZl90b2tlblwiOiBcIlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuICAgICAgICBsZXQgY3J5cHRvRGF0YTtcclxuICAgICAgICBsZXQgdXJsRGF0YTtcclxuICAgICAgICBsZXQgcG9zdFJlc3VsdDogYW55O1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY3J5cHRvRGF0YSA9IENyeXB0by5lbmNyeXB0KG9yaWdpbkRhdGEpO1xyXG4gICAgICAgICAgICB1cmxEYXRhID0gYHBhcmFtcz0ke2NyeXB0b0RhdGEucGFyYW1zfSZlbmNTZWNLZXk9JHtjcnlwdG9EYXRhLmVuY1NlY0tleX1gO1xyXG4gICAgICAgICAgICBwb3N0UmVzdWx0ID0gYXdhaXQgUmVxdWVzdC5wb3N0KHRoaXMuc2VhcmNoVXJsLCB1cmxEYXRhKTtcclxuICAgICAgICAgICAgdGltZXIrKztcclxuICAgICAgICB9IHdoaWxlIChwb3N0UmVzdWx0LmRhdGEgPT0gXCJcIiAmJiB0aW1lciA8IDIwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0UmVzdWx0KTtcclxuICAgICAgICB0aGlzLmxpc3REZXRhaWwuYnVpbGRCeVBvc3RSZXN1bHQocG9zdFJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdERldGFpbDtcclxuICAgIH1cclxufSJdfQ==