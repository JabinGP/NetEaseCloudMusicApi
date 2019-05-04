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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNTZWFyY2hIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvTXVzaWNTZWFyY2hIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLHlDQUFzQztBQUN0QyxxQ0FBa0M7QUFDbEM7SUFXSSwyQkFBWSxPQUFjLEVBQUMsS0FBZTtRQUFmLHNCQUFBLEVBQUEsVUFBZTtRQVQxQyxjQUFTLEdBQVUsc0NBQXNDLENBQUM7UUFJMUQsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUdoQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBR2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQU1ZLDJDQUFlLEdBQTVCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHLE9BQUssSUFBSSxDQUFDLE9BQU8sZUFBVSxJQUFJLENBQUMsS0FBSyx1QkFBa0IsSUFBSSxDQUFDLE1BQVEsQ0FBQzt3QkFDckUsV0FBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBMUQsVUFBVSxHQUFHLFNBQTZDO3dCQUMxRCxNQUFNLEdBQUcscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDckQsV0FBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFLTSx3Q0FBWSxHQUFuQjtRQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsS0FBSyxJQUFFLENBQUMsRUFBQztZQUMzQixJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFBQSxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUtNLG9DQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUtNLDBDQUFjLEdBQXJCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDO0FBcERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIOmfs+S5kOaQnOe0ouaOpeWPo1xuLy8g6K+05piOIDog6LCD55So5q2k5o6l5Y+jICwg5Lyg5YWl5pCc57Si5YWz6ZSu6K+N5Y+v5Lul5pCc57Si6K+l6Z+z5LmQIC8g5LiT6L6RIC8g5q2M5omLIC8g5q2M5Y2VIC8g55So5oi3ICwg5YWz6ZSu6K+N5Y+v5Lul5aSa5LiqICwg5Lul56m65qC86ZqU5byAICwg5aaCIFwiIOWRqOadsOS8piDmkIHmtYUgXCIoIOS4jemcgOimgeeZu+W9lSApLCDmkJzntKLojrflj5bnmoQgbXAzdXJsIOS4jeiDveebtOaOpeeUqCAsIOWPr+mAmui/hyAvc29uZy91cmwg5o6l5Y+j5Lyg5YWl5q2M5puyIGlkIOiOt+WPluWFt+S9k+eahOaSreaUvumTvuaOpVxuXG4vLyDlv4XpgInlj4LmlbAgOiBrZXl3b3JkcyA6IOWFs+mUruivjVxuXG4vLyDlj6/pgInlj4LmlbAgOiBsaW1pdCA6IOi/lOWbnuaVsOmHjyAsIOm7mOiupOS4uiAzMCBvZmZzZXQgOiDlgY/np7vmlbDph4/vvIznlKjkuo7liIbpobUgLCDlpoIgOiDlpoIgOigg6aG15pWwIC0xKSozMCwg5YW25LitIDMwIOS4uiBsaW1pdCDnmoTlgLwgLCDpu5jorqTkuLogMFxuXG4vLyB0eXBlOiDmkJzntKLnsbvlnovvvJvpu5jorqTkuLogMSDljbPljZXmm7IgLCDlj5blgLzmhI/kuYkgOiAxOiDljZXmm7IsIDEwOiDkuJPovpEsIDEwMDog5q2M5omLLCAxMDAwOiDmrYzljZUsIDEwMDI6IOeUqOaItywgMTAwNDogTVYsIDEwMDY6IOatjOivjSwgMTAwOTog55S15Y+wLCAxMDE0OiDop4bpopFcblxuLy8g5o6l5Y+j5Zyw5Z2AIDogL3NlYXJjaFxuXG4vLyDosIPnlKjkvovlrZAgOiAvc2VhcmNoP2tleXdvcmRzPSDmtbfpmJTlpKnnqbpcbmltcG9ydCB7TXVzaWNJbmZvfSBmcm9tIFwiLi9NdXNpY0luZm9cIjtcbmltcG9ydCB7UmVxdWVzdH0gZnJvbSBcIi4vUmVxdWVzdFwiO1xuZXhwb3J0IGNsYXNzIE11c2ljU2VhcmNoSGVscGVye1xuICAgIC8vIOWbuuWumuWAvFxuICAgIHNlYXJjaFVybDpzdHJpbmcgPSBcImh0dHBzOi8vbXVzaWMuMTYzLmNvbS9hcGkvc2VhcmNoL3BjL1wiO1xuICAgIFxuICAgIC8vIOiuvuWumuWAvFxuICAgIGtleXdvcmQ6c3RyaW5nOyAgICAgLy8g5pCc57Si5YWz6ZSu5a2XXG4gICAgbGltaXQ6bnVtYmVyPTEwOyAgICAgICAvLyDmr4/kuIDpobXnmoTmnIDlpKfmlbDph4/vvIzpu5jorqQxMFxuXG4gICAgLy8g6L+Q6KGM5pe26L+t5Luj5YC8XG4gICAgb2Zmc2V0Om51bWJlcj0wOyAgICAgIC8vIOW9k+WJjemhteeggVxuXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDpzdHJpbmcsbGltaXQ6bnVtYmVyPTEwKXtcbiAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICAgICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaQnOe0oue7k+aenFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRTZWFyY2hSZXN1bHQoKXtcbiAgICAgICAgbGV0IHNlYXJjaERhdGEgPSBgcz0ke3RoaXMua2V5d29yZH0mbGltaXQ9JHt0aGlzLmxpbWl0fSZ0eXBlPTEmb2Zmc2V0PSR7dGhpcy5vZmZzZXR9YDtcbiAgICAgICAgbGV0IHBvc3RSZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LnBvc3QodGhpcy5zZWFyY2hVcmwsc2VhcmNoRGF0YSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBNdXNpY0luZm8uYnVpbGRCeVBvc3RSZXN1bHQocG9zdFJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiK5LiA6aG1XG4gICAgICovXG4gICAgcHVibGljIHByZXZpb3VzUGFnZSgpOk11c2ljU2VhcmNoSGVscGVye1xuICAgICAgICBpZih0aGlzLm9mZnNldC10aGlzLmxpbWl0Pj0wKXtcbiAgICAgICAgICB0aGlzLm9mZnNldC09dGhpcy5saW1pdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LiL5LiA6aG1XG4gICAgICovXG4gICAgcHVibGljIG5leHRQYWdlKCk6TXVzaWNTZWFyY2hIZWxwZXJ7XG4gICAgICAgIHRoaXMub2Zmc2V0Kz10aGlzLmxpbWl0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blvZPliY3pobXmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFBhZ2UoKTpudW1iZXJ7XG4gICAgICByZXR1cm4gKHRoaXMub2Zmc2V0L3RoaXMubGltaXQpKzE7XG4gICAgfVxuXG59Il19