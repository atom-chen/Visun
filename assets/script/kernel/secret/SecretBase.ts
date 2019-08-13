
export default interface SecretBase {
    encrypt(buf:any) : any;     //加密
    decrypt(buf:any) : any;     //解密
}
