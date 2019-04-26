// 网络请求模块
export class Request{
    public static post(url:string,data:any){
        return new Promise((resolve, reject) => {
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
                // console.log("at post request: 请求成功")
                // console.log(data);
                // console.log(res);
                resolve(res)
              },
              fail: function (res) {
                console.log("at post request: 请求失败")
                reject(res)
              }
            })
        });
    }
}