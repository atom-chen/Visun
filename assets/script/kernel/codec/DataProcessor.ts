//---------------------------------
// 数据编码解码抽象
//---------------------------------
export default interface DataProcessor {
    encode(...args:any[]): any;
    decode(...args:any[]): any;
}
