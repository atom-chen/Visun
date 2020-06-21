
export default interface SecretBase {
    encrypt(buf:any, key:string, len:number) : any;     //加密
    decrypt(buf:any, key:string, len:number) : any;     //解密
}
