"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = (function () {
    function Request() {
    }
    Request.post = function (url, data) {
        return new Promise(function (resolve, reject) {
            wx.request({
                url: url,
                method: 'POST',
                header: {
                    "Accept": "*/*",
                    "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cookie": "appver=2.0.2",
                    "cache-control": "no-cache"
                },
                data: data,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    console.log("at post request: 请求失败");
                    reject(res);
                }
            });
        });
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzX3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFBQTtJQTJCQSxDQUFDO0lBMUJpQixZQUFJLEdBQWxCLFVBQW1CLEdBQVUsRUFBQyxJQUFRO1FBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxHQUFHO2dCQUNSLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixRQUFRLEVBQUUsS0FBSztvQkFDZixpQkFBaUIsRUFBRSxxQ0FBcUM7b0JBQ3hELGNBQWMsRUFBRSxtQ0FBbUM7b0JBQ25ELFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsVUFBVTtpQkFDNUI7Z0JBQ0QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLFVBQVUsR0FBRztvQkFJcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNkLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQVUsR0FBRztvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO29CQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy8g572R57uc6K+35rGC5qih5Z2XXG5leHBvcnQgY2xhc3MgUmVxdWVzdHtcbiAgICBwdWJsaWMgc3RhdGljIHBvc3QodXJsOnN0cmluZyxkYXRhOmFueSl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcIiovKlwiLFxuICAgICAgICAgICAgICAgIFwiQWNjZXB0LUxhbmd1YWdlXCI6IFwiemgtQ04semg7cT0wLjgsZ2w7cT0wLjYsemgtVFc7cT0wLjRcIixcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgICAgIFwiQ29va2llXCI6IFwiYXBwdmVyPTIuMC4yXCIsXG4gICAgICAgICAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhdCBwb3N0IHJlcXVlc3Q6IOivt+axguaIkOWKn1wiKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF0IHBvc3QgcmVxdWVzdDog6K+35rGC5aSx6LSlXCIpXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlcylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==