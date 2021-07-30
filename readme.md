# eachLimit
Throttled parallell async calls.
Inspired by [caolan/async](https://caolan.github.io/async/v3/docs.html#eachLimit) but for TypeScript and with added features.

# Install
```shell
npm install @webura/eachlimit
```
# Example
```typescript
import eachLimit from '@webura/eachlimit';
const list = [1,2,3,4,5,6,7,8,9,10];

async processMyListFiveAtTime(){
  await eachLimit(list, 5, async item=>{
    await remoteApiCall(item);
  });
}

processMyListFiveAtTime();
```
See [test.ts](https://github.com/Webura/eachlimit/blob/main/src/test.ts) for more examples

# Features
Typical use case for eachLimit is web-scraping or API-calls. 
There is a fourth argument `delay` specified in milliseconds, defaulted to `0`.
This will delay the initial calls to ease the digestion.


# Testing
```shell
npm test
```

# Unlicense
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>