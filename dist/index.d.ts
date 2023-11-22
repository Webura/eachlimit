export interface EachLimitOptions {
    delay?: number;
}
declare function eachLimit<T, K>(array: Array<T>, limit: number, run: (item: T, i: number) => Promise<K>, options?: EachLimitOptions): Promise<K[]>;
declare namespace eachLimit {
    var setOptions: (options: EachLimitOptions) => void;
}
export default eachLimit;
//# sourceMappingURL=index.d.ts.map