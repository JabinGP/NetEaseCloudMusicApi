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
                    console.log("at post request: 请求成功");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzX3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7SUFBQTtJQXlCQSxDQUFDO0lBeEJpQixZQUFJLEdBQWxCLFVBQW1CLEdBQVUsRUFBQyxJQUFXO1FBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxHQUFHO2dCQUNSLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixRQUFRLEVBQUUsS0FBSztvQkFDZixpQkFBaUIsRUFBRSxxQ0FBcUM7b0JBQ3hELGNBQWMsRUFBRSxtQ0FBbUM7b0JBQ25ELFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsVUFBVTtpQkFDNUI7Z0JBQ0QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLFVBQVUsR0FBRztvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBVSxHQUFHO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7b0JBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnvZHnu5zor7fmsYLmqKHlnZdcclxuZXhwb3J0IGNsYXNzIFJlcXVlc3R7XHJcbiAgICBwdWJsaWMgc3RhdGljIHBvc3QodXJsOnN0cmluZyxkYXRhOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcIiovKlwiLFxyXG4gICAgICAgICAgICAgICAgXCJBY2NlcHQtTGFuZ3VhZ2VcIjogXCJ6aC1DTix6aDtxPTAuOCxnbDtxPTAuNix6aC1UVztxPTAuNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgICAgIFwiQ29va2llXCI6IFwiYXBwdmVyPTIuMC4yXCIsXHJcbiAgICAgICAgICAgICAgICBcImNhY2hlLWNvbnRyb2xcIjogXCJuby1jYWNoZVwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXQgcG9zdCByZXF1ZXN0OiDor7fmsYLmiJDlip9cIilcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdCBwb3N0IHJlcXVlc3Q6IOivt+axguWksei0pVwiKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=