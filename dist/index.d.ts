declare function eachLimit<T, K>(array: Array<T>, limit: number, run: (item: T, i: number) => Promise<K>, delay?: number): Promise<K[]>;
export default eachLimit;
