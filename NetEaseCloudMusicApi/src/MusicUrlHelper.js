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
var MusicUrlHelper = (function () {
    function MusicUrlHelper(musicId) {
        this.searchUrl = "https://music.163.com/weapi/song/enhance/player/url/";
        this.result = "";
        this.musicId = musicId;
    }
    MusicUrlHelper.prototype.getUrlResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var originData, timer, cryptoData, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originData = {
                            "ids": [this.musicId],
                            "br": 999000,
                            "csrf_token": ""
                        };
                        timer = 0;
                        _a.label = 1;
                    case 1:
                        cryptoData = Crypto_1.Crypto.encrypt(originData);
                        return [4, Request_1.Request.post(this.searchUrl, cryptoData)];
                    case 2:
                        result = _a.sent();
                        timer++;
                        _a.label = 3;
                    case 3:
                        if (result.data == "" && timer < 20) return [3, 1];
                        _a.label = 4;
                    case 4:
                        if (result.data == "") {
                            return [2, ""];
                        }
                        else {
                            this.result = result.data.data[0].url;
                            return [2, this.result];
                        }
                        return [2];
                }
            });
        });
    };
    return MusicUrlHelper;
}());
exports.MusicUrlHelper = MusicUrlHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVzaWNVcmxIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c19zcmMvTXVzaWNVcmxIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFrQztBQUNsQyxtQ0FBZ0M7QUFDaEM7SUFVSSx3QkFBWSxPQUFjO1FBUjFCLGNBQVMsR0FBVSxzREFBc0QsQ0FBQztRQU0xRSxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUtZLHFDQUFZLEdBQXpCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHOzRCQUNiLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ3JCLElBQUksRUFBRSxNQUFNOzRCQUNaLFlBQVksRUFBRSxFQUFFO3lCQUNuQixDQUFBO3dCQUNHLEtBQUssR0FBRSxDQUFDLENBQUM7Ozt3QkFJWCxVQUFVLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDL0IsV0FBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFBOzt3QkFBdkQsTUFBTSxHQUFHLFNBQThDLENBQUM7d0JBQ3hELEtBQUssRUFBRSxDQUFDOzs7NEJBQ0YsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksS0FBSyxHQUFDLEVBQUU7Ozt3QkFDckMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFFLEVBQUUsRUFBQzs0QkFDbEIsV0FBTyxFQUFFLEVBQUM7eUJBQ1g7NkJBQUk7NEJBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7NEJBQ3RDLFdBQU8sSUFBSSxDQUFDLE1BQU0sRUFBQzt5QkFDcEI7Ozs7O0tBQ0o7SUFFTCxxQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlcXVlc3R9IGZyb20gXCIuL1JlcXVlc3RcIjtcbmltcG9ydCB7Q3J5cHRvfSBmcm9tIFwiLi9DcnlwdG9cIjtcbmV4cG9ydCBjbGFzcyBNdXNpY1VybEhlbHBlcntcbiAgICAvLyDlm7rlrprlgLxcbiAgICBzZWFyY2hVcmw6c3RyaW5nID0gXCJodHRwczovL211c2ljLjE2My5jb20vd2VhcGkvc29uZy9lbmhhbmNlL3BsYXllci91cmwvXCI7XG4gICAgXG4gICAgLy8g6K6+5a6a5YC8XG4gICAgbXVzaWNJZDpudW1iZXI7XG5cbiAgICAvLyDnu5PmnpxcbiAgICByZXN1bHQ6c3RyaW5nPVwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihtdXNpY0lkOm51bWJlcil7XG4gICAgICAgIHRoaXMubXVzaWNJZCA9IG11c2ljSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5pCc57Si57uT5p6cXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldFVybFJlc3VsdCgpe1xuICAgICAgICBsZXQgb3JpZ2luRGF0YSA9IHtcbiAgICAgICAgICAgIFwiaWRzXCI6IFt0aGlzLm11c2ljSWRdLFxuICAgICAgICAgICAgXCJiclwiOiA5OTkwMDAsXG4gICAgICAgICAgICBcImNzcmZfdG9rZW5cIjogXCJcIlxuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lciA9MDtcbiAgICAgICAgbGV0IGNyeXB0b0RhdGE7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgZG97XG4gICAgICAgICAgY3J5cHRvRGF0YSA9IENyeXB0by5lbmNyeXB0KG9yaWdpbkRhdGEpO1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFJlcXVlc3QucG9zdCh0aGlzLnNlYXJjaFVybCwgY3J5cHRvRGF0YSk7XG4gICAgICAgICAgdGltZXIrKztcbiAgICAgICAgfXdoaWxlIChyZXN1bHQuZGF0YSA9PSBcIlwiICYmIHRpbWVyPDIwKTtcbiAgICAgICAgaWYgKHJlc3VsdC5kYXRhPT1cIlwiKXtcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgIFxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0LmRhdGEuZGF0YVswXS51cmw7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG59Il19