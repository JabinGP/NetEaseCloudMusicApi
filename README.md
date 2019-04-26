# NetEaseCloudMusicApi
小程序网易云音乐api模块
> 之前我们已经开发过一款小程序适用的qq音乐api库了https://github.com/FisherWY/QQMusicPlugin，这次开发网易云音乐api库的原因是qq音乐api库在小程序中iOS环境下无法使用小程序提供的背景音频播放器播放的问题

> 网易云的加密算法真的比其他几家api复杂太多了。。。完爆QQ和酷狗

### 依赖
本api库参考了Github上面开源的node库，因为我们只想要查找音乐和播放音乐这两个功能，虽然Github那个库很方便，但是我们不想为了两个接口特意去跑一个node.js服务。Github上的库
1. big-integer.js  
  这里注意，不要使用最新版的，最新版的库再模拟器上运行没有问题，但是在真机调试的上传包阶段会报错说无法识别big-integer.js，最后在我的尝试下，选用了一个老版本的库解决了这个问题。
2. crypto-js
这个库是用来aes加密的，在node上面有一个原生的crypto，但是在小程序里我们没有，所以我照着Github上的源码一点一点用这个库翻译过来的，还有Buffer在小程序里也没有，我使用这个库的方法代替了。

### 获取api的原理
网上很多帖子讲的很清楚了，这里推荐几篇文章，我只做一个简单的总结，方便大家理解这个库。
网易云的加密算法大概使用了两个：
1. AES加密+BASE64编码
2. RSA加密

加密大致流程：
1. api请求信息先被转成json字符串格式，然后再使用一个固定的密钥aes+base64编码加密，得到了第一个`加密结果a`。
2. 客户端从`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/`随机生成一个新的16位密钥，然后用这个密钥去加密`加密结果a`，得到`加密结果b`。
3.这样我们的数据就被双重加密了，但是我们要发给服务器去查询对应的数据，服务器知道第一个固定的密钥是多少，可以解开第一个加密结果，但是服务器可不知道我们第二次加密用的是什么，所以服务器还需要得到我们的第二个生成的随机加密密钥。
4. 第二个随机加密密钥要是直接发给服务器好像就不太安全了，所以客户端对第二个随机加密密钥也进行了加密，使用的就是RSA加密，加密后得到的数据我们称为`c`
5. 将`b`和`c`发送给服务器，服务器就会返回给我们对应的结果了。

### 加密核心代码
这段代码传入对象后可以直接加密成符合网易云api加密的结果。
```javascript
String.prototype.hexEncode = function () {
    let hex, i

    let result = ""
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16)
        result += ("" + hex).slice(-4)
    }
    return result
}


// 生成随机数，size默认16
function createSecretKey(size) {
    const keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let key = ""
    for (let i = 0; i < size; i++) {
        let pos = Math.random() * keys.length
        pos = Math.floor(pos)
        key = key + keys.charAt(pos)
    }
    return key
}


// aes加密方法
function aesEncrypt(word, secKey) {
    let key = CryptoJS.enc.Utf8.parse(secKey);  //十六位十六进制数作为密钥
    let iv = CryptoJS.enc.Utf8.parse(aes_mv);   //十六位十六进制数作为密钥偏移量
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let res = encrypted.toString();
    console.log(res);
    return res;
}

// 填充方法
function zfill(str, size) {
    while (str.length < size) str = "0" + str
    return str
}

// rsa加密方法
function rsaEncrypt(text, pubKey, modulus) {
    const _text = text.split('').reverse().join('')
    const biText = bigInt(CryptoJS.enc.Utf8.parse(_text).toString(), 16),
        biEx = bigInt(pubKey, 16),
        biMod = bigInt(modulus, 16),
        biRet = biText.modPow(biEx, biMod)
    return zfill(biRet.toString(16), 256)
}


// 加密总入口
function Encrypt(obj) {
    const text = JSON.stringify(obj)
    const secKey = createSecretKey(16)
    const encText = aesEncrypt(aesEncrypt(text, nonce), secKey)
    const encSecKey = rsaEncrypt(secKey, pubKey, modulus)
    return {
        params: encText,
        encSecKey: encSecKey
    }
}
```
### 封装好的Api库
首先到Github下载我的Api库https://github.com/JabinGP/NetEaseCloudMusicApi
下载完成后，这个库应该是可以直接导入微信小程序开发工具运行的，但是有几个注意事项
1. 这个库是用TypeScript写的，但是最后编译成了JS运行，但是编译后JS代码可读性很差，所以我保留了TypeScript源文件，就在NetEaseCloudMusicApi/ts_src里面，应用库的时候不需要使用到
2. 关闭小程序开发工具的详情页的`ES6转ES5`，可以使用await处理异步请求（因为库是用`Promise`写的，起码要能用`Promise`，实例代码使用的是`await`/`async`）
3. await关键字只能在async修饰过的函数体内部使用，不懂的可以查一下await和async的用法。
4. `NetEaseCloudMusicApi/Libary`文件夹里面包含了项目依赖的js文件，应用的时候最好整个`NetEaseCloudMusicApi`文件夹复制到项目里面使用。
5. 测试的时候可以勾选不校验合法域名。
![1](https://upload-images.jianshu.io/upload_images/14225973-b53fa739408a3105.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 搜索歌曲
搜索歌曲需要的参数有两个
1. 歌曲名关键字
2. 希望返回的数据数量（用于查询结果分页分次查询）

使用说明
1. 首先引入`MusicManager`常量
2. 通过`MusicManager`的`getSearchHelper`方法获取一个查询器`searchHelper`，需要将参数传入`getSearchHelper`方法
3. 通过`searchHelper`的`getSearchResult`方法获取数据（默认第一页）
4. 可以通过`searchHelper`的`nextPage`、`previousPage`、`getCurrentPage`对应进行下一页，上一页，和查看当前页数的操作
5. 执行完切换页数后可以再次调用`getSearchResult`方法查看新页数的查询结果

代码实例
```javascript
const {MusicManager} = require("../../NetEaseCloudMusicApi/src/MusicManager");
async function test(){
     // 搜索歌曲
    let musicSearchHelper = MusicManager.getMusicSearchHelper({ keyword: "one more time one more chance", limit: 10 });
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.nextPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.previousPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    console.log(musicSearchHelper);
} 
test();
```
![2](https://upload-images.jianshu.io/upload_images/14225973-0977450d4401c36b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 通过搜索歌曲的结果获取音乐Url
有了搜索结果，我们还需要url才能播放资源
1. 首先引入`MusicManager`常量
2. 假设已经从上面获取了一个音乐查询结果
3. 从查询结果里面获取音乐id值
4. 通过`MusicManager`的`getUrlHelper`方法获取一个url获取器，需要将`id`传给
`getUrlHelper`方法
5. 通过`urlHelper`的`getUrlResult`方法获取url
6. 需要注意的是，由于网易云接口时常返回空回复，所以这里我通过20以内的重复次请求直到有结果就停止，如果20次以后还是没有结果（据我测试20次以内都请求到结果了），也就是返回一个空的字符串""，需要使用者自己重新调用一次`urlHelper`的`getUrlResult`方法
代码实例
```javascript
const {MusicManager} = require("../../NetEaseCloudMusicApi/src/MusicManager");

async function test(){
    // 搜索歌曲
    let musicSearchHelper = MusicManager.getMusicSearchHelper({ keyword: "one more time one more chance", limit: 10 });
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.nextPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.previousPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    console.log(musicSearchHelper);

    // 获取歌曲url
    let songs = await musicSearchHelper.getSearchResult();
    let musicId  = songs[0].id;
    let musicUrlHelper = MusicManager.getMusicUrlHelper(musicId);
    console.log(`歌曲的ID是：${musicId}`);
    let url = await musicUrlHelper.getUrlResult();
    console.log(`歌曲的url链接是：${url}`);
} 
test();
```
![3](https://upload-images.jianshu.io/upload_images/14225973-ded0cd2b34269afe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 4.26更新
新增搜索用户以及用户歌单获取接口
#### 搜索用户
MusicManager.getUserSearchHelper()方法，需要传入对象如{ userName: "JabinGP", limit: 20 }，分别代表用户名和最大查询数目
，调用方法后获取一个UserSearchHelper实例，通过这个实例的getSearchResult()方法获取搜索结果。
```javascript
async function test(){
  // 搜索用户
  let userSearchHelper = MusicManager.getUserSearchHelper({ userName: "JabinGP", limit: 20 });
  let users = await userSearchHelper.getSearchResult();
  console.log(users);
}
```
#### 获取用户歌单
MusicManager.getUserListHelper()方法，需要传入一个用户id。该方法返回一个UserListHelper实例，通过实例的getILikeList()方法或者getAllLists()方法获取我喜欢列表或者获取所有列表，前者返回一个数组，后者返回一个对象。
```javascript
async function test(){
  // 搜索用户
  let userSearchHelper = MusicManager.getUserSearchHelper({ userName: "JabinGP", limit: 20 });
  let users = await userSearchHelper.getSearchResult();
  console.log(users);
  
  // 获取我喜欢歌单
  let userListHelper = MusicManager.getUserListHelper(users[0].userId);
  let iLikeList = await userListHelper.getILikeList()
  console.log(iLikeList);
 }
```

#### 通过歌单里的Id获取歌曲url
与前面一致，不再赘述

#### 完整实例
完整实例代码在项目page下的index.js中，运行项目就会自动执行输出结果。
```javascript
async function test(){
    // 搜索歌曲
    let musicSearchHelper = MusicManager.getMusicSearchHelper({ keyword: "one more time one more chance", limit: 10 });
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.nextPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    musicSearchHelper.previousPage();
    console.log(`现在是第${musicSearchHelper.getCurrentPage()}页`);
    console.log(await musicSearchHelper.getSearchResult());
    console.log(musicSearchHelper);

    // 获取歌曲url
    let songs = await musicSearchHelper.getSearchResult();
    let musicId  = songs[0].id;
    let musicUrlHelper = MusicManager.getMusicUrlHelper(musicId);
    console.log(`歌曲的ID是：${musicId}`);
    let url = await musicUrlHelper.getUrlResult();
    console.log(`歌曲的url链接是：${url}`);

    // 搜索用户
    let userSearchHelper = MusicManager.getUserSearchHelper({ userName: "JabinGP", limit: 20 });
    let users = await userSearchHelper.getSearchResult();
    console.log(users);

    // 获取用户歌单
    let userListHelper = MusicManager.getUserListHelper(users[0].userId);
    let iLikeList = await userListHelper.getILikeList()
    console.log(iLikeList);
    
    // 获取我喜欢歌单
    let userListDeatilHelper = MusicManager.getUserListDetailHelper(iLikeList.id);
    let listDetail = await userListDeatilHelper.getDeatil();
    console.log(listDetail);
    let timer=0;
    for(let song of listDetail.tracks){
      musicUrlHelper.musicId=song.id;
      console.log(`歌曲的ID是：${musicUrlHelper.musicId}`);
      let url2 = await musicUrlHelper.getUrlResult();
      console.log(`歌曲的url链接是：${url2}`);
      if(timer++>20)break;
    }
  }   
test();
```

### 结尾
> 2019 4.25目前就只有这两个接口，因为我们项目就只需要这两个接口，如果有需要更多接口的，可以在下方评论，以上示例代码都在Github项目上的index.js中，也就是你把文件导入微信开发者工具后，取消勾选一下详情的ES6转ES5以及取消勾选合法域名检验，就可以在控制台看到以上示例代码的输出了

> 2019 4.26更新搜索用户和获取用户歌单以及获取歌单详细三个接口。

*如果对你有帮助，点个Star吧~*


