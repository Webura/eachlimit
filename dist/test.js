"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
async function waitAndPrint(ms, text) {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log(text);
            resolve(undefined);
        }, ms);
    });
}
async function test() {
    let result = await _1.default([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, async (item) => {
        await waitAndPrint(1000, item);
        return 'Item:' + item;
    });
    console.log(result);
}
test();
