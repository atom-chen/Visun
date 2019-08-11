
export default interface IPoolObject {
    unuse() : void;     //放回池中回调，代替构造函数
    reuse(...args:any[]) : void;     //从池中取回时回调
    //destructor() : void;   //析构
}
