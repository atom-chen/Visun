export default interface DataProcessor {
    encode(...args:any[]): any;
    decode(...args:any[]): any;
}
