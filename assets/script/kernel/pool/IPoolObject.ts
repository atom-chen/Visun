
export default interface IPoolObject {
    unuse() : void;                 //放回对象池时回调
    reuse(...args:any[]) : void;    //从对象池池中取回时回调
    //destructor() : void;          //析构
}
