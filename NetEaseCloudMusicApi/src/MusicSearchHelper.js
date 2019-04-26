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
var MusicInfo_1 = require("./MusicInfo");
var Request_1 = require("./Request");
var MusicSearchHelper = (function () {
    function MusicSearchHelper(keyword, limit) {
        if (limit === void 0) { limit = 10; }
        this.searchUrl = "https://music.163.com/api/search/pc/";
        this.limit = 10;
        this.offset = 0;
        this.limit = limit;
        this.keyword = keyword;
    }
    MusicSearchHelper.prototype.getSearchResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchData, postResult, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchData = "s=" + this.keyword + "&limit=" + this.limit + "&type=1&offset=" + this.offset;
                        return [4, Request_1.Request.post(this.searchUrl, searchData)];
                    case 1:
                        postResult = _a.sent();
                        result = MusicInfo_1.MusicInfo.buildByPostResult(postResult);
                        return [2, result];
                }
            });
        });
    };
    MusicSearchHelper.prototype.previousPage = function () {
        if (this.offset - this.limit >= 0) {
            this.offset -= this.limit;
        }
        ;
        return this;
    };
    MusicSearchHelper.prototype.nextPage = function () {
        this.offset += this.limit;
        return this;
    };
    MusicSearchHelper.prototype.getCurrentPage = function () {
        return (this.offset / this.limit) + 1;
    };
    return MusicSearchHelper;
}());
exports.MusicSearchHelper = MusicSearchHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNTZWFyY2hIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvTXVzaWNTZWFyY2hIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLHlDQUFzQztBQUN0QyxxQ0FBa0M7QUFDbEM7SUFXSSwyQkFBWSxPQUFjLEVBQUMsS0FBZTtRQUFmLHNCQUFBLEVBQUEsVUFBZTtRQVQxQyxjQUFTLEdBQVUsc0NBQXNDLENBQUM7UUFJMUQsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUdoQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBR2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQU1ZLDJDQUFlLEdBQTVCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHLE9BQUssSUFBSSxDQUFDLE9BQU8sZUFBVSxJQUFJLENBQUMsS0FBSyx1QkFBa0IsSUFBSSxDQUFDLE1BQVEsQ0FBQzt3QkFDckUsV0FBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBMUQsVUFBVSxHQUFHLFNBQTZDO3dCQUMxRCxNQUFNLEdBQUcscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDckQsV0FBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFLTSx3Q0FBWSxHQUFuQjtRQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsS0FBSyxJQUFFLENBQUMsRUFBQztZQUMzQixJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFBQSxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUtNLG9DQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUtNLDBDQUFjLEdBQXJCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDO0FBcERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIOmfs+S5kOaQnOe0ouaOpeWPo1xyXG4vLyDor7TmmI4gOiDosIPnlKjmraTmjqXlj6MgLCDkvKDlhaXmkJzntKLlhbPplK7or43lj6/ku6XmkJzntKLor6Xpn7PkuZAgLyDkuJPovpEgLyDmrYzmiYsgLyDmrYzljZUgLyDnlKjmiLcgLCDlhbPplK7or43lj6/ku6XlpJrkuKogLCDku6XnqbrmoLzpmpTlvIAgLCDlpoIgXCIg5ZGo5p2w5LymIOaQgea1hSBcIigg5LiN6ZyA6KaB55m75b2VICksIOaQnOe0ouiOt+WPlueahCBtcDN1cmwg5LiN6IO955u05o6l55SoICwg5Y+v6YCa6L+HIC9zb25nL3VybCDmjqXlj6PkvKDlhaXmrYzmm7IgaWQg6I635Y+W5YW35L2T55qE5pKt5pS+6ZO+5o6lXHJcblxyXG4vLyDlv4XpgInlj4LmlbAgOiBrZXl3b3JkcyA6IOWFs+mUruivjVxyXG5cclxuLy8g5Y+v6YCJ5Y+C5pWwIDogbGltaXQgOiDov5Tlm57mlbDph48gLCDpu5jorqTkuLogMzAgb2Zmc2V0IDog5YGP56e75pWw6YeP77yM55So5LqO5YiG6aG1ICwg5aaCIDog5aaCIDooIOmhteaVsCAtMSkqMzAsIOWFtuS4rSAzMCDkuLogbGltaXQg55qE5YC8ICwg6buY6K6k5Li6IDBcclxuXHJcbi8vIHR5cGU6IOaQnOe0ouexu+Wei++8m+m7mOiupOS4uiAxIOWNs+WNleabsiAsIOWPluWAvOaEj+S5iSA6IDE6IOWNleabsiwgMTA6IOS4k+i+kSwgMTAwOiDmrYzmiYssIDEwMDA6IOatjOWNlSwgMTAwMjog55So5oi3LCAxMDA0OiBNViwgMTAwNjog5q2M6K+NLCAxMDA5OiDnlLXlj7AsIDEwMTQ6IOinhumikVxyXG5cclxuLy8g5o6l5Y+j5Zyw5Z2AIDogL3NlYXJjaFxyXG5cclxuLy8g6LCD55So5L6L5a2QIDogL3NlYXJjaD9rZXl3b3Jkcz0g5rW36ZiU5aSp56m6XHJcbmltcG9ydCB7TXVzaWNJbmZvfSBmcm9tIFwiLi9NdXNpY0luZm9cIjtcclxuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tIFwiLi9SZXF1ZXN0XCI7XHJcbmV4cG9ydCBjbGFzcyBNdXNpY1NlYXJjaEhlbHBlcntcclxuICAgIC8vIOWbuuWumuWAvFxyXG4gICAgc2VhcmNoVXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9tdXNpYy4xNjMuY29tL2FwaS9zZWFyY2gvcGMvXCI7XHJcbiAgICBcclxuICAgIC8vIOiuvuWumuWAvFxyXG4gICAga2V5d29yZDpzdHJpbmc7ICAgICAvLyDmkJzntKLlhbPplK7lrZdcclxuICAgIGxpbWl0Om51bWJlcj0xMDsgICAgICAgLy8g5q+P5LiA6aG155qE5pyA5aSn5pWw6YeP77yM6buY6K6kMTBcclxuXHJcbiAgICAvLyDov5DooYzml7bov63ku6PlgLxcclxuICAgIG9mZnNldDpudW1iZXI9MDsgICAgICAvLyDlvZPliY3pobXnoIFcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXl3b3JkOnN0cmluZyxsaW1pdDpudW1iZXI9MTApe1xyXG4gICAgICB0aGlzLmxpbWl0ID0gbGltaXQ7XHJcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmkJzntKLnu5PmnpxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldFNlYXJjaFJlc3VsdCgpe1xyXG4gICAgICAgIGxldCBzZWFyY2hEYXRhID0gYHM9JHt0aGlzLmtleXdvcmR9JmxpbWl0PSR7dGhpcy5saW1pdH0mdHlwZT0xJm9mZnNldD0ke3RoaXMub2Zmc2V0fWA7XHJcbiAgICAgICAgbGV0IHBvc3RSZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LnBvc3QodGhpcy5zZWFyY2hVcmwsc2VhcmNoRGF0YSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IE11c2ljSW5mby5idWlsZEJ5UG9zdFJlc3VsdChwb3N0UmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LiK5LiA6aG1XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcmV2aW91c1BhZ2UoKTpNdXNpY1NlYXJjaEhlbHBlcntcclxuICAgICAgICBpZih0aGlzLm9mZnNldC10aGlzLmxpbWl0Pj0wKXtcclxuICAgICAgICAgIHRoaXMub2Zmc2V0LT10aGlzLmxpbWl0O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIvkuIDpobVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5leHRQYWdlKCk6TXVzaWNTZWFyY2hIZWxwZXJ7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQrPXRoaXMubGltaXQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blvZPliY3pobXmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEN1cnJlbnRQYWdlKCk6bnVtYmVye1xyXG4gICAgICByZXR1cm4gKHRoaXMub2Zmc2V0L3RoaXMubGltaXQpKzE7XHJcbiAgICB9XHJcblxyXG59Il19