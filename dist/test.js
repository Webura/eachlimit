"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eachlimit_1 = require("./eachlimit");
eachlimit_1.default.setOptions({ delay: 1000 });
async function waitAndPrint(ms, text) {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log(text);
            resolve(undefined);
        }, ms);
    });
}
async function test() {
    let result = await eachlimit_1.default([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, async (item) => {
        await waitAndPrint(3000, item);
        return 'Item:' + item;
    });
    console.log(result);
}
test();
