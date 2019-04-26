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
var UserInfo_1 = require("./UserInfo");
var UserSearchHelper = (function () {
    function UserSearchHelper(userName, limit) {
        if (limit === void 0) { limit = 10; }
        this.searchUrl = "https://music.163.com/api/search/pc/";
        this.limit = 10;
        this.offset = 0;
        this.limit = limit;
        this.userName = userName;
    }
    UserSearchHelper.prototype.getSearchResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchData, postResult, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchData = "s=" + this.userName + "&limit=" + this.limit + "&type=1002&offset=" + this.offset;
                        return [4, Request_1.Request.post(this.searchUrl, searchData)];
                    case 1:
                        postResult = _a.sent();
                        result = UserInfo_1.UserInfo.buildByPostResult(postResult);
                        return [2, result];
                }
            });
        });
    };
    return UserSearchHelper;
}());
exports.UserSearchHelper = UserSearchHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlYXJjaEhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzX3NyYy9Vc2VyU2VhcmNoSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFDbEMsdUNBQW1DO0FBQ25DO0lBV0ksMEJBQVksUUFBZSxFQUFDLEtBQWU7UUFBZixzQkFBQSxFQUFBLFVBQWU7UUFUM0MsY0FBUyxHQUFVLHNDQUFzQyxDQUFDO1FBSTFELFVBQUssR0FBUSxFQUFFLENBQUM7UUFHaEIsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUdaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFNWSwwQ0FBZSxHQUE1Qjs7Ozs7O3dCQUNRLFVBQVUsR0FBRyxPQUFLLElBQUksQ0FBQyxRQUFRLGVBQVUsSUFBSSxDQUFDLEtBQUssMEJBQXFCLElBQUksQ0FBQyxNQUFRLENBQUM7d0JBQ3pFLFdBQU0saUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxVQUFVLENBQUMsRUFBQTs7d0JBQTFELFVBQVUsR0FBRyxTQUE2Qzt3QkFDMUQsTUFBTSxHQUFHLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3BELFdBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVxdWVzdH0gZnJvbSBcIi4vUmVxdWVzdFwiO1xyXG5pbXBvcnQge1VzZXJJbmZvfSBmcm9tIFwiLi9Vc2VySW5mb1wiXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VhcmNoSGVscGVye1xyXG4gICAgLy8g5Zu65a6a5YC8XHJcbiAgICBzZWFyY2hVcmw6c3RyaW5nID0gXCJodHRwczovL211c2ljLjE2My5jb20vYXBpL3NlYXJjaC9wYy9cIjtcclxuICAgIFxyXG4gICAgLy8g6K6+5a6a5YC8XHJcbiAgICB1c2VyTmFtZTpzdHJpbmc7ICAgICAgIC8vIOaQnOe0oueUqOaIt+WQjVxyXG4gICAgbGltaXQ6bnVtYmVyPTEwOyAgICAgICAvLyDmr4/kuIDpobXnmoTmnIDlpKfmlbDph4/vvIzpu5jorqQxMFxyXG5cclxuICAgIC8vIOi/kOihjOaXtui/reS7o+WAvFxyXG4gICAgb2Zmc2V0Om51bWJlcj0wOyAgICAgIC8vIOW9k+WJjemhteeggVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJOYW1lOnN0cmluZyxsaW1pdDpudW1iZXI9MTApe1xyXG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaQnOe0oue7k+aenFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0U2VhcmNoUmVzdWx0KCl7XHJcbiAgICAgICAgbGV0IHNlYXJjaERhdGEgPSBgcz0ke3RoaXMudXNlck5hbWV9JmxpbWl0PSR7dGhpcy5saW1pdH0mdHlwZT0xMDAyJm9mZnNldD0ke3RoaXMub2Zmc2V0fWA7XHJcbiAgICAgICAgbGV0IHBvc3RSZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LnBvc3QodGhpcy5zZWFyY2hVcmwsc2VhcmNoRGF0YSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFVzZXJJbmZvLmJ1aWxkQnlQb3N0UmVzdWx0KHBvc3RSZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iXX0=