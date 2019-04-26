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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzX3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFBQTtJQTJCQSxDQUFDO0lBMUJpQixZQUFJLEdBQWxCLFVBQW1CLEdBQVUsRUFBQyxJQUFRO1FBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxHQUFHO2dCQUNSLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixRQUFRLEVBQUUsS0FBSztvQkFDZixpQkFBaUIsRUFBRSxxQ0FBcUM7b0JBQ3hELGNBQWMsRUFBRSxtQ0FBbUM7b0JBQ25ELFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsVUFBVTtpQkFDNUI7Z0JBQ0QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLFVBQVUsR0FBRztvQkFJcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNkLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQVUsR0FBRztvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO29CQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy8g572R57uc6K+35rGC5qih5Z2XXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0e1xyXG4gICAgcHVibGljIHN0YXRpYyBwb3N0KHVybDpzdHJpbmcsZGF0YTphbnkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCIqLypcIixcclxuICAgICAgICAgICAgICAgIFwiQWNjZXB0LUxhbmd1YWdlXCI6IFwiemgtQ04semg7cT0wLjgsZ2w7cT0wLjYsemgtVFc7cT0wLjRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvb2tpZVwiOiBcImFwcHZlcj0yLjAuMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYWNoZS1jb250cm9sXCI6IFwibm8tY2FjaGVcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF0IHBvc3QgcmVxdWVzdDog6K+35rGC5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcylcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXQgcG9zdCByZXF1ZXN0OiDor7fmsYLlpLHotKVcIilcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXMpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19