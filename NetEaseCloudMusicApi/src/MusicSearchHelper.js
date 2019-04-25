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
        if (this.offset > 0) {
            this.offset--;
        }
        ;
        return this;
    };
    MusicSearchHelper.prototype.nextPage = function () {
        this.offset++;
        return this;
    };
    MusicSearchHelper.prototype.getCurrentPage = function () {
        return this.offset + 1;
    };
    return MusicSearchHelper;
}());
exports.MusicSearchHelper = MusicSearchHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNTZWFyY2hIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvTXVzaWNTZWFyY2hIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLHlDQUFzQztBQUN0QyxxQ0FBa0M7QUFDbEM7SUFXSSwyQkFBWSxPQUFjLEVBQUMsS0FBZTtRQUFmLHNCQUFBLEVBQUEsVUFBZTtRQVQxQyxjQUFTLEdBQVUsc0NBQXNDLENBQUM7UUFJMUQsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUdoQixXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBR2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQU1ZLDJDQUFlLEdBQTVCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHLE9BQUssSUFBSSxDQUFDLE9BQU8sZUFBVSxJQUFJLENBQUMsS0FBSyx1QkFBa0IsSUFBSSxDQUFDLE1BQVEsQ0FBQzt3QkFDckUsV0FBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBMUQsVUFBVSxHQUFHLFNBQTZDO3dCQUMxRCxNQUFNLEdBQUcscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDckQsV0FBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFLTSx3Q0FBWSxHQUFuQjtRQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtRQUFBLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBS00sb0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFLTSwwQ0FBYyxHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUtMLHdCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDpn7PkuZDmkJzntKLmjqXlj6NcclxuLy8g6K+05piOIDog6LCD55So5q2k5o6l5Y+jICwg5Lyg5YWl5pCc57Si5YWz6ZSu6K+N5Y+v5Lul5pCc57Si6K+l6Z+z5LmQIC8g5LiT6L6RIC8g5q2M5omLIC8g5q2M5Y2VIC8g55So5oi3ICwg5YWz6ZSu6K+N5Y+v5Lul5aSa5LiqICwg5Lul56m65qC86ZqU5byAICwg5aaCIFwiIOWRqOadsOS8piDmkIHmtYUgXCIoIOS4jemcgOimgeeZu+W9lSApLCDmkJzntKLojrflj5bnmoQgbXAzdXJsIOS4jeiDveebtOaOpeeUqCAsIOWPr+mAmui/hyAvc29uZy91cmwg5o6l5Y+j5Lyg5YWl5q2M5puyIGlkIOiOt+WPluWFt+S9k+eahOaSreaUvumTvuaOpVxyXG5cclxuLy8g5b+F6YCJ5Y+C5pWwIDoga2V5d29yZHMgOiDlhbPplK7or41cclxuXHJcbi8vIOWPr+mAieWPguaVsCA6IGxpbWl0IDog6L+U5Zue5pWw6YePICwg6buY6K6k5Li6IDMwIG9mZnNldCA6IOWBj+enu+aVsOmHj++8jOeUqOS6juWIhumhtSAsIOWmgiA6IOWmgiA6KCDpobXmlbAgLTEpKjMwLCDlhbbkuK0gMzAg5Li6IGxpbWl0IOeahOWAvCAsIOm7mOiupOS4uiAwXHJcblxyXG4vLyB0eXBlOiDmkJzntKLnsbvlnovvvJvpu5jorqTkuLogMSDljbPljZXmm7IgLCDlj5blgLzmhI/kuYkgOiAxOiDljZXmm7IsIDEwOiDkuJPovpEsIDEwMDog5q2M5omLLCAxMDAwOiDmrYzljZUsIDEwMDI6IOeUqOaItywgMTAwNDogTVYsIDEwMDY6IOatjOivjSwgMTAwOTog55S15Y+wLCAxMDE0OiDop4bpopFcclxuXHJcbi8vIOaOpeWPo+WcsOWdgCA6IC9zZWFyY2hcclxuXHJcbi8vIOiwg+eUqOS+i+WtkCA6IC9zZWFyY2g/a2V5d29yZHM9IOa1t+mYlOWkqeepulxyXG5pbXBvcnQge011c2ljSW5mb30gZnJvbSBcIi4vTXVzaWNJbmZvXCI7XHJcbmltcG9ydCB7UmVxdWVzdH0gZnJvbSBcIi4vUmVxdWVzdFwiO1xyXG5leHBvcnQgY2xhc3MgTXVzaWNTZWFyY2hIZWxwZXJ7XHJcbiAgICAvLyDlm7rlrprlgLxcclxuICAgIHNlYXJjaFVybDpzdHJpbmcgPSBcImh0dHBzOi8vbXVzaWMuMTYzLmNvbS9hcGkvc2VhcmNoL3BjL1wiO1xyXG4gICAgXHJcbiAgICAvLyDorr7lrprlgLxcclxuICAgIGtleXdvcmQ6c3RyaW5nOyAgICAgLy8g5pCc57Si5YWz6ZSu5a2XXHJcbiAgICBsaW1pdDpudW1iZXI9MTA7ICAgICAgIC8vIOavj+S4gOmhteeahOacgOWkp+aVsOmHj++8jOm7mOiupDEwXHJcblxyXG4gICAgLy8g6L+Q6KGM5pe26L+t5Luj5YC8XHJcbiAgICBvZmZzZXQ6bnVtYmVyPTA7ICAgICAgLy8g5b2T5YmN6aG156CBXHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5d29yZDpzdHJpbmcsbGltaXQ6bnVtYmVyPTEwKXtcclxuICAgICAgdGhpcy5saW1pdCA9IGxpbWl0O1xyXG4gICAgICAgIHRoaXMua2V5d29yZCA9IGtleXdvcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pCc57Si57uT5p6cXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRTZWFyY2hSZXN1bHQoKXtcclxuICAgICAgICBsZXQgc2VhcmNoRGF0YSA9IGBzPSR7dGhpcy5rZXl3b3JkfSZsaW1pdD0ke3RoaXMubGltaXR9JnR5cGU9MSZvZmZzZXQ9JHt0aGlzLm9mZnNldH1gO1xyXG4gICAgICAgIGxldCBwb3N0UmVzdWx0ID0gYXdhaXQgUmVxdWVzdC5wb3N0KHRoaXMuc2VhcmNoVXJsLHNlYXJjaERhdGEpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBNdXNpY0luZm8uYnVpbGRCeVBvc3RSZXN1bHQocG9zdFJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuS4gOmhtVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJldmlvdXNQYWdlKCk6TXVzaWNTZWFyY2hIZWxwZXJ7XHJcbiAgICAgICAgaWYodGhpcy5vZmZzZXQ+MCl7XHJcbiAgICAgICAgICB0aGlzLm9mZnNldC0tO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIvkuIDpobVcclxuICAgICAqL1xyXG4gICAgcHVibGljIG5leHRQYWdlKCk6TXVzaWNTZWFyY2hIZWxwZXJ7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQrKztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjemhteaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFBhZ2UoKTpudW1iZXJ7XHJcbiAgICAgIHJldHVybiB0aGlzLm9mZnNldCsxO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxufSJdfQ==