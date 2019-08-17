//---------------------------------
// 数据编码解码抽象
//---------------------------------
export default interface ICodec {
	encode(...args:any[]): any;
	decode(...args:any[]): any;
}
