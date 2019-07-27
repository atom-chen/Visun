export interface DataProcessor {
    encode(...args:any[]): any;
    decode(...args:any[]): any;
}
