export interface DataProcessor {
    encode(data: any): any;
    decode(data: any): any;
}
