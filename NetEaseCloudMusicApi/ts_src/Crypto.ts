// 加密类
import CryptoJS = require("../Libary/crypto-js/index.js");      // 加密类库
import BigInt = require("../Libary/BigInteger.js");  // 大数类库

export class Crypto{
    // AES加密
    static readonly firstKey:string = '0CoJUm6Qyw8W8jud';   // aes第一次加密秘钥为，固定
    static readonly aes_mv:string = '0102030405060708';     // aes偏移，固定
    static secondKey:string = "";                           // aes第二次加密秘钥在加密时随机获取

    // RSA加密
    static readonly modulus:string = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    static readonly pubKey:string = '010001' ;        // rsa公钥


    /**
     * 生成随机数，size默认16
     * @param size 
     */
    public static createSecretKey(size = 16) {
        const keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let key = "";
        for (let i = 0; i < size; i++) {
            let pos = Math.random() * keys.length;
            pos = Math.floor(pos);
            key = key + keys.charAt(pos);
        }
        return key;
    }
    
    /**
     * 使用AES加密和BASE64编码
     * @param word 加密的数据
     * @param secKey 加密密钥
     */
    public static aesEncrypt(word, secKey) {
        let key = CryptoJS.enc.Utf8.parse(secKey);  //十六位十六进制数作为密钥
        let iv = CryptoJS.enc.Utf8.parse(this.aes_mv);   //十六位十六进制数作为密钥偏移量
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        let res = encrypted.toString();
        // console.log(res);
        return res;
    }

    /**
     * 填充
     * @param str 原始字符串
     * @param size 期望长度
     */
    public static zfill(str, size) {
        while (str.length < size) str = "0" + str;
        return str;
    }

    /**
     * RSA加密
     * @param text 加密内容
     * @param pubKey 公钥
     * @param modulus 固定值
     */
    public static rsaEncrypt(text, pubKey, modulus) {
        const _text = text.split('').reverse().join('');
        const biText = BigInt(CryptoJS.enc.Utf8.parse(_text).toString(), 16),
            biEx = BigInt(pubKey, 16),
            biMod = BigInt(modulus, 16),
            biRet = biText.modPow(biEx, biMod);
        return this.zfill(biRet.toString(16), 256);
    }

    /**
     * 加密算法入口
     * @param obj 待加密对象
     */
    public static encrypt(obj) {
        const text = JSON.stringify(obj);
        const secKey = this.createSecretKey(16);
        let firstRes = this.aesEncrypt(text, this.firstKey);
        const secondRes = this.aesEncrypt(firstRes, secKey);
        const encSecKey = this.rsaEncrypt(secKey, this.pubKey, this.modulus);
        return {
            params: secondRes,
            encSecKey: encSecKey
        }
    }
}


